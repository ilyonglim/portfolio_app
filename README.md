# 요구사항 명세서

개인 포트폴리오 1페이지 웹사이트 기능 명세서
1. 개요
* 목적: 개인의 전문성을 강조하고 프로젝트/경력을 효과적으로 보여주는 1페이지 포트폴리오 웹사이트.
* 특징: 모던 디자인, 직관적 UI/UX, 반응형 웹 구현.
* 대상 기기: Desktop / Tablet / Mobile (반응형).

2. 주요 구성 섹션
2.1 헤더(Header) & 내비게이션
* 로고/이름 표시.
* 우측 상단 메뉴 (섹션 앵커 링크): Home | About | Skills | Portfolio | Contact.
* 스크롤 시 고정(Fixed) 및 배경 투명 → 스크롤 시 배경색 적용.
2.2 히어로 섹션(Home)
* 전체 화면 배경(이미지 or 영상 or 컬러 그라디언트).
* 소개 문구: 이름, 직무(예: "웹 기획자 & 디지털 크리에이터").
* CTA 버튼: “Contact Me” → Contact 섹션 이동.
2.3 About Me
* 프로필 이미지 + 간단 자기소개.
* 핵심 경력 및 전문 분야 간단 나열.
* CV 다운로드 버튼 (PDF).
2.4 Skills
* 주요 기술/역량을 시각화 (Progress Bar, Icon, Tag 형식).
* Frontend, Backend, Planning, Tools 등 카테고리 구분.
2.5 Portfolio (Project Showcase)
* 프로젝트 카드형 Grid (썸네일 + 제목 + 간단 설명).
* 카드 Hover 시 상세 보기 버튼.
* 클릭 시 Modal 팝업 또는 별도 링크 → 상세 프로젝트 설명/데모.
2.6 Contact
* 연락처 정보: 이메일, 전화, LinkedIn/GitHub 링크.
* 간단한 문의 폼(Form):
    * 이름, 이메일, 메시지 입력.
    * 제출 시 이메일 발송(API 연동 or Formspree 등).
* 소셜 미디어 아이콘.
2.7 Footer
* 저작권 문구 © 2025 이름.
* 간단한 소셜 링크 반복 표시.
