import React, { useState, useEffect } from 'react';
import { selectUserData } from '../api/firebase';
import axios from 'axios';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Checkbox,
  Input,
  CardMedia,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import '../css/cartPage.css';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [currentUserEmail, setCurrentUserEmail] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const auth = getAuth();
  const navigate = useNavigate();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  // 유저정보
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUserEmail(user.email);
      } else {
        setCurrentUserEmail(null);
      }
    });
  }, [auth]);

  useEffect(() => {
    if (currentUserEmail) {
      const fetchUserInfo = async () => {
        try {
          const info = await selectUserData(currentUserEmail);
          setUserInfo(info);
          setIsAdmin(info && info.isAdmin === 1);
        } catch (error) {
          console.error('사용자 정보를 불러오는 중 에러:', error);
        }
      };
      fetchUserInfo();
      fetchCartItems();
    }
  }, [currentUserEmail]);

  const fetchCartItems = async () => {
    try {
      const response = await axios.get(`/ft/api/v2/carts/list/${currentUserEmail}`);
      setCartItems(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('장바구니 목록을 불러오는데 실패했습니다:', error);
    }
  };

  useEffect(() => {
    const calculateTotalPrice = () => {
      const totalPrice = cartItems.reduce((acc, item) => acc + item.totalPrice, 0);
      setTotalCount(totalPrice);
    };

    calculateTotalPrice();
  }, [cartItems]);

  // 개별 선택 버튼
  const handleToggleItem = (itemId, itemOption) => {
    const selectedItem = cartItems.find((item) => item.iid === itemId && item.option === itemOption);
    const isSelected = selectedItems.some((item) => item.cid === selectedItem.cid);

    if (isSelected) {
      setSelectedItems((prevItems) => prevItems.filter((item) => item.cid !== selectedItem.cid));
    } else {
      setSelectedItems((prevItems) => [...prevItems, selectedItem]);
    }
  };

  // 전체 선택 버튼
  const handleToggleAllItems = () => {
    if (selectedItems.length === cartItems.length) {
      // If all items are selected, clear the selection
      setSelectedItems([]);
    } else {
      // Otherwise, select all items
      setSelectedItems([...cartItems]);
    }
  };

  // 카트 아이템 삭제
  const handleDeleteItem = (cid) => {
    axios
      .delete(`/ft/api/v2/carts/delete/${currentUserEmail}`, {
        data: [cid] // 삭제할 아이템의 ID를 배열로 전달
      })
      .then((response) => {
        if (response.data === true) {
          // 성공적으로 삭제된 경우
          const updatedItems = cartItems.filter((item) => item.cid !== cid);
          setCartItems(updatedItems);
          console.log('상품이 성공적으로 삭제되었습니다.');
        } else {
          console.error('상품 삭제 실패: 서버 응답 오류');
        }
      })
      .catch((error) => {
        console.error('상품 삭제 실패:', error);
      });
  };

  // 전체 아이템 삭제 요청
  const handleDeleteAllItems = () => {
    axios
      .post(`/ft/api/v2/carts/delete/${currentUserEmail}`)
      .then((response) => {
        if (response.data === true) {
          // 성공적으로 삭제된 경우
          setCartItems([]); // 장바구니를 비웁니다.
          console.log('모든 상품이 성공적으로 삭제되었습니다.');
        } else {
          console.error('상품 삭제 실패: 서버 응답 오류');
        }
      })
      .catch((error) => {
        console.error('상품 삭제 실패:', error);
      });
  };

  // 카트 아이템 수량 변경
  const handleQuantityChange = async (cartId, itemId, itemOption, newQuantity) => {
    try {
      const count = parseInt(newQuantity, 10);

      await axios.post('/ft/api/v2/carts/update', {
        cid: cartId,
        email: currentUserEmail,
        iid: itemId,
        ioid: itemOption,
        count: count,
      }).then(response => {
        console.log(response);
        if (response.data) {
          console.log('변경되었습니다.');
        } else {
          console.log('재고가 부족합니다.');
        }
      })
        .catch(error => {
          console.error('장바구니 추가 실패:', error);
        });

      const updatedItems = cartItems.map((item) => {
        if (item.cid === cartId) {
          const newTotalPrice = count * item.price;
          return { ...item, count: count, totalPrice: newTotalPrice };
        } else {
          return item;
        }
      });

      setCartItems(updatedItems);
    } catch (error) {
      console.error('상품 수량 업데이트 실패:', error);
    }
  };

  // 카트 아이템 렌더링
  const renderCartItemRows = () => {
    if (cartItems.length === 0) {
      return (
        <TableRow>
          <TableCell colSpan={8} align="center">
            장바구니가 비어 있습니다.
          </TableCell>
        </TableRow>
      );
    }

    const handleClick = (item) => {
      navigate(`/item/detail/${item.iid}`);
    };

    return cartItems.map((item) => (
      <TableRow key={`${item.iid}-${item.option}`}>
        {!isSmallScreen &&
          <TableCell>
            <Checkbox
              checked={selectedItems.some((selectedItem) => selectedItem.cid === item.cid)}
              onChange={() => handleToggleItem(item.iid, item.option)}
            />
          </TableCell>
        }
        <TableCell>
          <CardMedia
            component="img"
            image={item.img1}
            alt={item.img1}
            style={{ height: 200, cursor: 'pointer' }}
            onClick={() => handleClick(item)}
            item={item}
          />
        </TableCell>
        <TableCell>{item.name}</TableCell>
        <TableCell>{item.price}원</TableCell>
        {!isSmallScreen &&
          <TableCell>{item.option}</TableCell>
        }
        <TableCell>
          <Input
            type="number"
            value={item.count}
            onChange={(e) => handleQuantityChange(item.cid, item.iid, item.ioid, e.target.value)}
            inputProps={{ min: 1, max: item.stockCount }}
          />
        </TableCell>
        <TableCell>{item.totalPrice}원</TableCell>
        <TableCell>
          <Button onClick={() => handleDeleteItem(item.cid)} variant="contained" color="error">
            X
          </Button>
        </TableCell>
      </TableRow>
    ));
  };

  return (
    <Container
      maxWidth="lg"
      sx={{ mt: 5 }}
    >
      <Typography variant="h4" gutterBottom>
        장바구니
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={15}>
          <Table>
            <TableHead>
              <TableRow>
                {!isSmallScreen &&
                  <TableCell sx={{ width: isSmallScreen ? '10%' : '5%' }}>
                    <Checkbox
                      variant="contained"
                      color="primary"
                      onClick={handleToggleAllItems}
                    >
                      {selectedItems.length === cartItems.length ? '전체 선택 해제' : '전체 선택'}
                    </Checkbox>
                  </TableCell>
                }
                <TableCell>이미지</TableCell>
                <TableCell>상품명</TableCell>
                <TableCell>가격</TableCell>
                {!isSmallScreen && <TableCell>옵션</TableCell>}
                <TableCell>수량</TableCell>
                <TableCell>합계</TableCell>
                <TableCell>삭제</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{renderCartItemRows()}</TableBody>
            <Box className="boxContainer">
              <Typography
                variant="subtitle1"
                sx={{ mt: 1, whiteSpace: 'nowrap' }}
              >
                총 상품 가격: {totalCount.toFixed(0)}원
              </Typography>
              <Button
                variant="contained"
                color="error"
                onClick={handleDeleteAllItems}
                disabled={selectedItems.length === 0}
                sx={{ marginBottom: 2, mr: 'auto', whiteSpace: 'nowrap' }}
              >
                전체 삭제
              </Button>
            </Box>
          </Table>
          <Box
            xs={12}
            sx={{
              justifyContent: 'center'
            }}
          >
            <Button className='linkButton' variant="contained" fullWidth>
              주문하기
            </Button>
            <Button className='linkButton' variant="contained" fullWidth onClick={() => navigate('/item')}>
              쇼핑 계속하기
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CartPage;
