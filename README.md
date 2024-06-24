# 가구 쇼핑몰 FURNiture
가구를 다루는 쇼핑몰 웹사이트입니다. 쇼핑몰의 일반적인 기능들에 직관적인 UI를 추가했습니다.
또한 관리자로 로그인 시 관리자를 위한 상품 추가, 회원 전체의 주문내역 보기, 통계 페이지 등을 제공합니다.

# FURNiture 영상
- 배포 중단 관계로 시연영상으로 대체
- [![Video Label](https://i.ytimg.com/vi/MfuXneddQo8/hqdefault.jpg?sqp=-oaymwE2CPYBEIoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgBqgeAAtAFigIMCAAQARhlIGUoZTAP&rs=AOn4CLDRDGLgA1YnJaiYybY-sKx9lgljww)](https://www.youtube.com/watch?v=MfuXneddQo8)

# 프로젝트 기간
- 2024년 4월 16일 ~ 2024년 6월 14일

# 역할 분담
- 이강성: 상품, 리뷰, 문의의 기능과 결제(toss), 택배(DeliveryTracker), Karlo, cloudinary api, 통합, 배포
- 송햇님: 택배(스마트택배) API, 주문내역캘린더, 문의, 비회원주문, 개발자페이지, 하트 토글
- 정아름: 후기, 회원 주문, footer, ERD, 통계(상품 분석), 실시간 검색어
- 박성민: 주문, Firebase를 이용한 유저, 소셜로그인 기능과 RealtimeDB, Karlo, CoolSMS api, 배포
- 홍시표: 최근 상품, 장바구니와 관리자 분석, 통계 페이지, Azure api
- 김용현: 디자인, 유저인터페이스, 페이지 데이터 출력 기능 연결

# [1] 기술 스택
![image](https://github.com/Ape07Park/Final-project-24.05-integralation/assets/132667775/5b77c38a-1026-4411-a1e4-659baab2391e)

# [2] 아키텍처
![아키텍쳐 drawio](https://github.com/Ape07Park/Human-Final-Project/assets/132667775/fd9907ed-339a-4555-9032-c205fa787aca)

# [3] 주요 기능
## 유저 관련 기능
<details>
  <summary><b>1. 회원가입 및 로그인</b> (👈 Click)</summary>
  <br>
  <div markdown="1">
    <h3>로그인</h3>
    <ul>
      <li>Firebase Authentication을 사용하여 로그인 기능 구현</li>
  <img src="https://github.com/Ape07Park/Human-Final-Project/assets/132667775/7e72acca-af8f-4a17-8a83-714c0169b56f" alt="로그인">
       <li>Firebase Authentication을 사용하여 회원가입 기능 구현</li>
  <img src="https://github.com/Ape07Park/Human-Final-Project/assets/132667775/2eb69b62-4fea-460e-b3f2-2de062cda279" alt="로그인">
  </ul>
  </div>
</details>

 <details>
  <summary><b>2. 유저 마이페이지</b> (👈 Click)</summary>
  <br>
  <div markdown="1">
    <ul>
      <li>Firebase Realtime DB를 이용하여 유저 정보 저장 및 관리</li>
  <img src="https://github.com/Ape07Park/Human-Final-Project/assets/132667775/254bf3b4-babf-4620-a069-2b4180276bb0" alt="로그인">
  </ul>
  </div>
</details>

  <details>
  <summary><b>3. 유저 정보 수정</b> (👈 Click)</summary>
  <br>
  <div markdown="1">
    <ul>
      <li>Firebase Authentication 및 Realtime DB를 통해 유저 정보 업데이트</li>
  <img src="https://github.com/Ape07Park/Human-Final-Project/assets/132667775/e44fc74c-4550-4ba3-b1e8-186e4c93b88a" alt="로그인">
  </ul>
  </div>
</details>

 <details>
  <summary><b>4. 이메일로 비밀번호 변경</b> (👈 Click)</summary>
  <br>
  <div markdown="1">
    <ul>
      <li>Firebase Authentication을 이용하여 이메일로 비밀번호 변경 기능 제공</li>
  <img src="https://github.com/Ape07Park/Human-Final-Project/assets/132667775/3bb2f4ad-d65b-4ced-a880-de6f03bfd2f3" alt="로그인">
       
  <li>이메일 변경을 위한 이메일 입력 모달</li>
  <img src="https://github.com/Ape07Park/Human-Final-Project/assets/132667775/017a8a55-bcbe-4ba8-8d24-82eacdf46087" alt="로그인">
       
  <li>이메일 입력 시 변경됨</li>
  <img src="https://github.com/Ape07Park/Human-Final-Project/assets/132667775/d7b9a39c-aa91-44c7-a56c-abe8669fae45" alt="로그인">

  <li>이메일</li>
  <img src="https://github.com/Ape07Park/Human-Final-Project/assets/132667775/4069e2d1-947b-40f1-9c40-2b824bce4bdb" alt="로그인">

  <li>이메일로 비밀번호 변경</li>
  <img src="https://github.com/Ape07Park/Human-Final-Project/assets/132667775/0e715eaa-0de6-4600-83b9-fe7a5a9e6ff1" alt="로그인">
  </ul>

   <li>이메일로 비밀번호 변경 완료</li>
  <img src="https://github.com/Ape07Park/Human-Final-Project/assets/132667775/99f5e50b-1745-4510-8300-1284aeffaafe" alt="로그인">
  </ul>  
  </div>
</details>

 <details>
  <summary><b>5. SMS로 비밀번호 변경</b> (👈 Click)</summary>
  <br>
  <div markdown="1">
    <ul>
      <li>CoolSMS API를 활용하여 SMS 전송 기능을 통해 비밀번호 변경 기능 구현</li>
  <img src="https://github.com/Ape07Park/Human-Final-Project/assets/132667775/5a29b2eb-af84-4af1-a1ab-d53dacc6ef0b" alt="로그인">

  <li>인증코드 확인</li>
  <img src="https://github.com/Ape07Park/Human-Final-Project/assets/132667775/2adb478e-e284-480a-a563-c4ccc32ccabb" alt="로그인">

   <li>비밀번호 입력</li>
  <img src="https://github.com/Ape07Park/Human-Final-Project/assets/132667775/a0f2a854-fd6d-4c00-83e0-786bb9a3ef3f" alt="로그인">   
  </ul>
  </div>
</details>

<details>
  <summary><b>6. SMS로 아이디 찾기</b> (👈 Click)</summary>
  <br>
  <div markdown="1">
    <ul>
      <li>CoolSMS API를 활용하여 SMS 전송 기능을 통해 아이디 찾기 기능 구현</li>
  <img src="https://github.com/Ape07Park/Human-Final-Project/assets/132667775/f31d8c7f-d96c-4d3e-aba5-fadce20ac859" alt="로그인">

  <li>인증코드 확인</li>
  <img src="https://github.com/Ape07Park/Human-Final-Project/assets/132667775/2adb478e-e284-480a-a563-c4ccc32ccabb" alt="로그인">

   <li>비밀번호 입력</li>
  <img src="https://github.com/Ape07Park/Human-Final-Project/assets/132667775/91770945-035c-4d0a-be3a-7096f9e78c78" alt="로그인">   
  </ul>
  </div>
</details>

## 상품 관련 기능
<details>
  <summary><b>1. 상품 리스트 및 상세 페이지, 해시태그</b> (👈 Click)</summary>
  <br>
  <div markdown="1">
    <h3>리스트</h3>
    <ul>
      <li>MySQL로 데이터를 관리 상품 정보 저장 및 상품 리스트 구현</li>
      <img src="https://github.com/KangSungLee/Final-Project/assets/155405751/67e1e82c-e712-4713-8f15-fd5f87d2d7b7" alt="상품리스트">
    </ul>
    <h3>상세 페이지</h3>
    <ul>
      <li>MySQL로 데이터를 관리 상품 정보 저장 및 상품 상세 페이지 및 해시태그 구현</li>
      <img src="https://github.com/KangSungLee/Final-Project/assets/155405751/67e1e82c-e712-4713-8f15-fd5f87d2d7b7" alt="상세페이지">
    </ul>
  </div>
</details>

<details>
  <summary><b>2. 리뷰 및 문의</b> (👈 Click)</summary>
  <br>
  <div markdown="1">
    <h3>리뷰</h3>
    <ul>
      <li>상품 상세 페이지에서 사용자 리뷰 리스트</li>
      <img src="https://github.com/KangSungLee/Final-Project/assets/155405751/828df158-d72b-4718-9b4e-d0c2a1534032" alt="리뷰 리스트">
      <li>리뷰 작성</li>
      <img src="https://github.com/KangSungLee/Final-Project/assets/155405751/bb234e38-a7c7-4d65-a238-fe7aa9ee5afc" alt="리뷰 작성">
      <li>리뷰 수정</li>
      <img src="https://github.com/KangSungLee/Final-Project/assets/155405751/1b271334-2938-4494-85c3-87b408171c41" alt="리뷰 수정">
    </ul>
    <h3>문의</h3>
    <ul>
      <li>상품 상세 페이지에서 사용자 문의 리스트</li>
      <img src="https://github.com/KangSungLee/Final-Project/assets/155405751/f975a32c-125c-4b0d-b1eb-c47a1126273d" alt="문의 리스트">
      <li>문의 작성</li>
      <img src="https://github.com/KangSungLee/Final-Project/assets/155405751/c3c5d970-0da4-4524-a16e-e5ab4dd7c42d" alt="문의 작성">
      <li>문의 수정 및 삭제</li>
      <img src="https://github.com/KangSungLee/Final-Project/assets/155405751/d022de92-1820-4c94-9049-e941f261646e" alt="문의 수정 및 삭제">
    </ul>
  </div>
</details>

<details>
  <summary><b>3. 검색 기능</b> (👈 Click)</summary>
  <br>
  <div markdown="1">
    <h3>검색 기능</h3>
    <ul>
      <li>데이터베이스 검색 기능을 구현하여 상품 검색 지원</li>
      <img src="https://github.com/KangSungLee/Final-Project/assets/155405751/577fc44b-91e5-4dd6-bf96-ec48bc870ad0" alt="검색창">
      <li>검색 리스트</li>
      <img src="https://github.com/KangSungLee/Final-Project/assets/155405751/82dd6120-9d42-4682-8568-e5ea34f4b7a3" alt="검색 리스트">
    </ul>
  </div>
</details>

<details>
  <summary><b>4. 세일 및 장바구니</b> (👈 Click)</summary>
  <br>
  <div markdown="1">
    <h3>세일</h3>
    <ul>
      <li>세일 리스트</li>
      <img src="https://github.com/KangSungLee/Final-Project/assets/155405751/62e2c6e7-1c26-441f-ad18-bd8f8a5e1dcd" alt="세일 리스트">
    </ul>
    <h3>장바구니</h3>
    <ul>
      <li>장바구니 수량 변경 및 삭제 주문하기 기능</li>
      <img src="https://github.com/KangSungLee/Final-Project/assets/155405751/d6d529f7-ab25-43b7-b483-96e55b2f645f" alt="장바구니">
    </ul>
  </div>
</details>

<details>
  <summary><b>5. 마음에 드는 상품 찜 기능 + AI 방 배경 그리기</b> (👈 Click)</summary>
  <br>
  <div markdown="1">
    <h3>사용자가 찜한 상품 리스트와 Azure의 Computer Vision API를 사용하여 이미지에서 배경을 자동으로 제거, Karlo의 AI 이미지 편집 기능으로 배경 생성 기능 제공</h3>
    <ul>
      <li>찜 리스트</li>
      <img src="https://github.com/KangSungLee/Final-Project/assets/155405751/34ad89d6-dcc5-4c44-a141-07f8f5ddccd2" alt="찜 리스트">
      <li>AI 방 배경 생성</li>
      <img src="https://github.com/KangSungLee/Final-Project/assets/155405751/7eb8c614-cdcc-4c08-b3ad-598f6a00cf2f" alt="AI 방 배경 생성">
    </ul>
  </div>
</details>

## 주문 및 결제 관련 기능
<details>
  <summary><b>1. 주문 및 결제</b> (👈 Click)</summary>
  <br>
  <div markdown="1">
    <h3>Toss API를 통해 결제 처리 및 결제 상태 관리</h3>
    <ul>
      <li>결제창</li>
      <img src="https://github.com/KangSungLee/Final-Project/assets/155405751/3aafd7bc-3e66-4be4-926c-5ac6a0535f89" alt="결제창">
      <li>Toss API를 통해 결제창</li>
      <img src="https://github.com/KangSungLee/Final-Project/assets/155405751/b9c2f300-59fa-4861-95e2-744de03330a3" alt="Toss API를 통해 결제창">
      <li>Toss API를 통해 결제 처리</li>
      <img src="https://github.com/KangSungLee/Final-Project/assets/155405751/3011307a-2ca8-44be-877a-63b7657ce894" alt="Toss API를 통해 결제 처리">
      <li>Toss API를 통해 결제 완료</li>
      <img src="https://github.com/KangSungLee/Final-Project/assets/155405751/6128a335-e2e7-4406-8746-dd777fa0b422" alt="Toss API를 통해 결제 완료">
    </ul>
  </div>
</details>

<details>
  <summary><b>2. 구매 내역 관리</b> (👈 Click)</summary>
  <br>
  <div markdown="1">
    <h3>데이터베이스에 구매 내역 저장 및 관리</h3>
    <ul>
      <li>주문내역 리스트</li>
      <img src="https://github.com/KangSungLee/Final-Project/assets/155405751/c821ab6b-e00e-4c6b-ab4d-4df13b5a3b58" alt="주문내역 리스트">
      <li>주문내역 상세조회</li>
      <img src="https://github.com/KangSungLee/Final-Project/assets/155405751/fcf6db31-ac65-40df-a642-7df2316cdb99" alt="주문내역 상세조회">
    </ul>
  </div>
</details>

<details>
  <summary><b>3. 송장번호 조회 및 현재 배달 상태</b> (👈 Click)</summary>
  <br>
  <div markdown="1">
    <h3>DeliveryTracker API를 사용하여 송장번호 조회 및 배송 상태 관리</h3>
    <ul>
      <li>송장번호 조회 및 배송 상태 관리</li>
      <img src="https://github.com/KangSungLee/Final-Project/assets/155405751/673a92fc-24c1-4c8f-addd-f33c9acd2eed" alt="송장번호 조회 및 배송 상태 관리">
    </ul>
  </div>
</details>
  
## 관리자 관련 기능
1. 상품 관리
 - 관리자 페이지에서 상품 등록, 수정, 삭제 기능 구현
2. 문의내역 관리
 - 관리자 페이지에서 사용자 문의 내역 관리
3. 주문 내역 관리
 - 관리자 페이지에서 주문 정보 확인 및 처리
4. 상품 통계
 - 데이터베이스에서 추출한 데이터를 기반으로 한 상품 판매 통계 제공

## api
- Firebase Authentication
- Firebase Realtime DB
- Cloudinary
- Toss
- DeliveryTracker
- Chart.js
- Karlo
- CoolSMS
- Azure

# [4] 업무 플로우
![image](https://github.com/Ape07Park/Final-project-24.05-integralation/assets/132667775/56fda504-e0bf-4460-bc2c-1721d16251a0)

# [5] ERD
![image](https://github.com/Ape07Park/Final-project-24.05-integralation/assets/132667775/1acb14e4-d903-44ff-9902-b30729a0a6ce)

# [6] API 명세
![image](https://github.com/Ape07Park/Final-project-24.05-integralation/assets/132667775/3a5ba29d-a5d8-4643-9bef-6842265f0861)
