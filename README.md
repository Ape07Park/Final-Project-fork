# 가구 쇼핑몰 FUNiture
가구를 다루는 쇼핑몰 웹사이트입니다. 쇼핑몰의 일반적인 기능들에 직관적인 UI를 추가했습니다.
또한 관리자로 로그인 시 관리자를 위한 상품 추가, 회원 전체의 주문내역 보기, 통계 페이지 등을 제공합니다.


# 프로젝트 기간
- 2024년 4월 16일 ~ 2024년 6월 14일

# [1] 주요 기능
## 유저 관련 기능
1. 회원가입 및 로그인
 - Firebase Authentication을 사용하여 사용자 인증 기능 구현
2. 유저 마이페이지
 - Firebase Realtime DB를 이용하여 유저 정보 저장 및 관리
3. 유저 정보 수정
 - Firebase Authentication 및 Realtime DB를 통해 유저 정보 업데이트
4. 이메일로 비밀번호 변경
 - Firebase Authentication을 이용하여 이메일로 비밀번호 변경 기능 제공
5. SMS 아이디 찾기 및 비밀번호 변경
 - CoolSMS API를 활용하여 SMS 전송 기능을 통해 아이디 찾기 및 비밀번호 변경 기능 구현

## 상품 관련 기능
1. 상품 리스트 및 상세 페이지
 - MySQL로 데이터를 관리 상품 정보 저장 및 상품 리스트 구현
2. 리뷰 및 해시태그
 - 상품 상세 페이지에서 사용자 리뷰 및 해시태그 관리
3. 검색 기능
 - 데이터베이스 검색 기능을 구현하여 상품 검색 지원
4. 세일 및 장바구니
 - 장바구니 기능을 구현하고, 상품의 할인 정보 관리
5. 상품 저장 및 수정 삭제
 - 관리가 저장한 상품 관리 및 수정 삭제 기능 제공
6. 마음에 드는 상품 찜 기능 + AI 방 배경 그리기
 - 사용자가 찜한 상품 리스트와 Azure의 Computer Vision API를 사용하여 이미지에서 배경을 자동으로 제거, Karlo의 AI 이미지 편집 기능으로 배경 생성 기능 제공

## 주문 및 결제 관련 기능
1. 주문 및 결제
 - Toss API를 통해 결제 처리 및 결제 상태 관리
2. 송장번호 조회 및 현재 배달 상태
 - DeliveryTracker API를 사용하여 송장번호 조회 및 배송 상태 관리
3. 구매 내역 관리
 - 데이터베이스에 구매 내역 저장 및 관리
  
## 관리자 관련 기능
1. 상품 관리
 - 관리자 페이지에서 상품 등록, 수정, 삭제 기능 구현
2. 문의내역 관리
 - 관리자 페이지에서 사용자 문의 내역 관리
3. 주문 내역 관리
 - 관리자 페이지에서 주문 정보 확인 및 처리
4. 상품 통계
 - 데이터베이스에서 추출한 데이터를 기반으로 한 상품 판매 통계 제공

## 사용할 기술 및 서비스
 - Frontend: React.js
 - Backend: SpringBoot
 - 데이터베이스: Firebase Realtime DB, MySQL
 - 데이터 시각화: Chart.js
 - 외부 서비스 연동: Firebase Authentication, Cloudinary, Toss, DeliveryTracker, CoolSMS, Azure, Karlo
 - 배포 : AWS EC2, Linux

# [2] 기술 스택
![image](https://github.com/Ape07Park/Final-project-24.05-integralation/assets/132667775/5b77c38a-1026-4411-a1e4-659baab2391e)

# [3] 업무 플로우
![image](https://github.com/Ape07Park/Final-project-24.05-integralation/assets/132667775/56fda504-e0bf-4460-bc2c-1721d16251a0)

# [4] ERD
![image](https://github.com/Ape07Park/Final-project-24.05-integralation/assets/132667775/1acb14e4-d903-44ff-9902-b30729a0a6ce)

# [5] API 명세
![image](https://github.com/Ape07Park/Final-project-24.05-integralation/assets/132667775/3a5ba29d-a5d8-4643-9bef-6842265f0861)

# [6] 서비스 구성
## [1] 메인![image](https://github.com/Ape07Park/Final-project-24.05-integralation/assets/132667775/cef4c586-bb21-4fd9-ac71-f3ec1e1889ee)

## [2] 로그인![image](https://github.com/Ape07Park/Final-project-24.05-integralation/assets/132667775/91ddb2eb-a178-45bc-bf64-87185a219a79)

## [3] 회원가입![image](https://github.com/Ape07Park/Final-project-24.05-integralation/assets/132667775/cd84c275-dca3-42fa-b113-e7758887eecc)

## [4] 회원정보![image](https://github.com/Ape07Park/Final-project-24.05-integralation/assets/132667775/782563ef-7db7-495a-8111-96400f32e900)

## [5] 회원정보 수정![image](https://github.com/Ape07Park/Final-project-24.05-integralation/assets/132667775/65902505-9ee6-4c7f-978f-b5806efb5235)

## [6] 아이템 검색 ![image](https://github.com/Ape07Park/Final-project-24.05-integralation/assets/132667775/151fd74f-438e-454c-acf4-b25c796ca94c)

## [7] 아이템 상세![image](https://github.com/Ape07Park/Final-project-24.05-integralation/assets/132667775/696c7589-d2a8-42e4-af03-e13360904132)

## [8] 아이템 리뷰![image](https://github.com/Ape07Park/Final-project-24.05-integralation/assets/132667775/335d699d-c03a-43a6-8ba9-89f282658536)

## [9] 아이템 문의![image](https://github.com/Ape07Park/Final-project-24.05-integralation/assets/132667775/4951ec35-07e9-4519-982c-1b932a7c39a9)

## [10] 장바구니![image](https://github.com/Ape07Park/Final-project-24.05-integralation/assets/132667775/a63801af-51e0-4fa6-ae77-08238b58714b)

## [11] 주문![image](https://github.com/Ape07Park/Final-project-24.05-integralation/assets/132667775/290f05a2-42b4-4367-a36a-df31e5e236dc)

## [12] 결재![image](https://github.com/Ape07Park/Final-project-24.05-integralation/assets/132667775/96db6560-8e11-4ec0-8b79-729abfeccdb5)

## [12] 주문내역![image](https://github.com/Ape07Park/Final-project-24.05-integralation/assets/132667775/74912a80-fb41-4922-8fa7-7ce305b7b5ee)


## [13] 아이템 정보(관리자)![image](https://github.com/Ape07Park/Final-project-24.05-integralation/assets/132667775/cdf30b48-a3c6-47b0-a61f-ffa2c2f24f8f)


## [14] 문의 내역(관리자)![image](https://github.com/Ape07Park/Final-project-24.05-integralation/assets/132667775/a9f3e171-849e-4229-aa28-dfce967c7ec8)


## [15] 전체 주문 내역(관리자)![image](https://github.com/Ape07Park/Final-project-24.05-integralation/assets/132667775/06182462-31eb-4925-b5ac-02d84ed52a01)


## [16] 통계(관리자)![image](https://github.com/Ape07Park/Final-project-24.05-integralation/assets/132667775/7d210218-f211-41c0-907b-46da6030a680)






