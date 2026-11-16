<!-- GitHub Profile README | CHOI MINSU -->

<div align="center">
  <img width="100%" src="https://capsule-render.vercel.app/api?type=waving&height=290&section=header&color=0:0f172a,100:1d4ed8&text=CHOI%20MINSU&fontColor=ffffff&fontSize=48&fontAlignY=36&desc=AI%20Engineering%20%7C%20Models%20to%20Services&descSize=19&descAlignY=58" alt="CHOI MINSU — AI Engineering" />

  <p>협성대학교 컴퓨터공학과 · 2027.02 졸업 예정</p>
  <p>데이터 누수 점검과 모델 경량화로 <b>AI 성능을 수치로 검증하고 개선</b>해 왔습니다.<br/>
     실시간 통신 구조와 오류를 해결하며 <b>모델부터 서비스까지 직접 다루는 개발 경험</b>을 쌓았습니다.</p>
  <p>
    <a href="https://kimps005.github.io/kimps005/" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/PORTFOLIO-VIEW%20WEBSITE-2563EB?style=for-the-badge&logo=googlechrome&logoColor=white" alt="웹 포트폴리오 바로가기"/></a>
  </p>
  <p>
    <a href="mailto:kimps005@gmail.com"><img src="https://img.shields.io/badge/Email-374151?style=flat-square&logo=gmail&logoColor=white" alt="Email"/></a>
    <a href="https://github.com/kimps005"><img src="https://img.shields.io/badge/GitHub-374151?style=flat-square&logo=github&logoColor=white" alt="GitHub"/></a>
    <a href="https://huggingface.co/kimps005/sms-category-model"><img src="https://img.shields.io/badge/Hugging%20Face-Model-FFD21E?style=flat-square&logo=huggingface&logoColor=black" alt="Hugging Face Model"/></a>
  </p>
</div>

---

## ⚙️ Skill (스킬)

##### ▫️ AI / Machine Learning

![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![PyTorch](https://img.shields.io/badge/PyTorch-EE4C2C?style=flat-square&logo=pytorch&logoColor=white)
![Transformers](https://img.shields.io/badge/Transformers-475569?style=flat-square)
![Hugging Face](https://img.shields.io/badge/Hugging%20Face-FFD21E?style=flat-square&logo=huggingface&logoColor=black)
![PaddleOCR](https://img.shields.io/badge/PaddleOCR-475569?style=flat-square)
![X VLA](https://img.shields.io/badge/X--VLA-475569?style=flat-square)

##### ▫️ Backend / Application

![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white)
![Flutter](https://img.shields.io/badge/Flutter-02569B?style=flat-square&logo=flutter&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-149ECA?style=flat-square&logo=react&logoColor=white)
![WebSocket](https://img.shields.io/badge/WebSocket-475569?style=flat-square)

##### ▫️ Database

![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white)

##### ▫️ Deployment / Tools

![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)
![Cloudflare](https://img.shields.io/badge/Cloudflare-F38020?style=flat-square&logo=cloudflare&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)
![Unity](https://img.shields.io/badge/Unity-000000?style=flat-square&logo=unity&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white)

## 🗂️ Projects (프로젝트)

**문제 → 구현 → 결과** 순서로 핵심만 정리했습니다. 각 프로젝트를 펼치면 기술 구현과 검증 내용을 확인할 수 있습니다.

| 프로젝트 | 무엇을 만들었나 | 핵심 기술 · 성과 |
| :-- | :-- | :-- |
| **01 · [CatchSmishing](https://github.com/kimps005/CatchSmishing)**<br/>AI Security / NLP | 문자·캡처 이미지·QR을 분석해 스미싱 위험 정보를 제공하는 서비스 | **7개 문자 유형 분류 96.18%** · INT8 모델 크기 **약 58%↓**, 로컬 p50 지연 **약 47%↓** |
| **02 · Pictory**<br/>Generative AI<br/>[▶ 시연 영상](https://www.youtube.com/watch?v=YQvHdezsk_4) | 아이가 그린 그림을 캐릭터로 활용해 동화와 음성을 생성하는 서비스 | LLM · 이미지 생성 · 한국어 TTS<br/>**2026 해커톤 대상(1위)** |
| **03 · [EGGG](https://github.com/dainyeyo/miniproject)**<br/>Real-time Web | AI 그림 퀴즈를 여러 사용자가 함께 즐기는 멀티플레이 웹게임 | **Polling → WebSocket** 전환 · 채팅·타이머 오류 해결 |
| **04 · LET'S HIM COOK!**<br/>VLA / Simulation | Unity 식당에서 서빙·트레이 수거 동작을 학습하는 VLA 실험 | **X-VLA 파인튜닝** · 서빙 300 + 수거 300 에피소드 수집 |
| **05 · MOAGIL**<br/>Route Optimization | QR로 동승자 목적지를 모아 하차 순서를 계산하는 차량용 서비스 | 최대 **4개 목적지, 24가지 순서(4!)** 비교 설계 |

### Implementation & Results (구현·성과 상세)

<details>
<summary><strong>01 · CatchSmishing — OCR / BERT / 모델 경량화</strong></summary>

<br/>

**입력 → 분석 → 결과**

문자·캡처 이미지·QR URL → PaddleOCR / KLUE BERT / URL 검사 / Gemini 문맥 분석 → 스미싱 위험 신호와 판단 근거 제공

- **서비스:** FastAPI 분석 API, Flutter 클라이언트, Hugging Face 분류 모델 공개
- **평가 개선:** 데이터 중복 가능성을 점검하고 120개 하위 유형 기준 그룹 분할 및 3개 학습 시드 재평가
- **모델 성능:** 7개 *문자 카테고리 분류* Accuracy **96.18 ± 0.21%**, Macro-F1 **96.15 ± 0.21%**
- **추론 최적화:** FP32 대비 INT8 동적 양자화로 파일 크기 **약 58% 감소**, 단일 문자 p50 지연 **약 47% 감소** (생성형 SMS 2,800건 로컬 벤치마크)

[GitHub](https://github.com/kimps005/CatchSmishing) · [서비스](https://catchsmishing.com) · [Hugging Face 모델](https://huggingface.co/kimps005/sms-category-model)

<sub>문자 유형 분류 정확도는 스미싱 이진 탐지율이 아닙니다. 양자화 수치는 지정된 로컬 벤치마크 조건에 해당합니다.</sub>

</details>

<details>
<summary><strong>02 · Pictory — LLM / Image Generation / TTS</strong></summary>

<br/>

**아이의 그림 → 동화 캐릭터 → 이야기·이미지·음성**

- **문제:** 자신의 고민과 감정을 말로 구체화하기 어려운 어린이
- **기능:** 아이가 그린 그림을 캐릭터로 활용하고 선택지에 따라 동화 경험 구성
- **AI 파이프라인:** 이야기 생성 LLM · 동화 장면 이미지 생성 · 한국어 TTS 낭독
- **성과:** **2026년 11월 해커톤 대상(전체 1위)**

**▶ [픽토리 시연 영상 보기 (YouTube)](https://www.youtube.com/watch?v=YQvHdezsk_4)**

<a href="https://www.youtube.com/watch?v=YQvHdezsk_4" target="_blank" rel="noopener noreferrer"><img src="https://img.youtube.com/vi/YQvHdezsk_4/hqdefault.jpg" width="480" alt="픽토리 시연 영상 썸네일 — 클릭하여 YouTube에서 보기" /></a>

</details>

<details>
<summary><strong>03 · EGGG — WebSocket 실시간 통신 개선</strong></summary>

<br/>

**AI 그림 퀴즈 + 초대코드 기반 실시간 멀티플레이**

- **구성:** Next.js 14 / React 18 · Node.js WebSocket 서버 · Neon PostgreSQL
- **문제:** 그림·채팅 업데이트 지연, 채팅 중복, 라운드 타이머 오류
- **개선:** 약 1.2초 간격의 상태 Polling을 **WebSocket 이벤트 통신으로 전환**, 메시지·타이머 로직 수정
- **검증:** 여러 브라우저에서 입장, 채팅, 타이머, 라운드 전환을 반복 테스트해 시연 완료

[GitHub](https://github.com/dainyeyo/miniproject)

</details>

<details>
<summary><strong>04 · LET'S HIM COOK! — X-VLA 학습 실험</strong></summary>

<br/>

**Unity 시뮬레이션 → RGB·상태·행동 데이터 → X-VLA 파인튜닝**

- **모델:** X-VLA (`lerobot/xvla-base`) 기반 약 **30,000 steps** 파인튜닝 실험
- **데이터:** 약 10Hz RGB·상태·행동 수집. 초기 459개 에피소드 / 50,679프레임 기록
- **과업 재설계:** 서빙 **300** + 수거 **300** 에피소드로 학습 대상을 분리
- **시스템 분리:** 대기·게임 상태는 Unity 규칙 로직으로 처리하고 모델 학습을 핵심 행동에 집중
- **검증:** 텔레오퍼레이션·데이터 수집 및 학습 실험. 자율 동작 성공률은 별도 검증되지 않음

</details>

<details>
<summary><strong>05 · MOAGIL — QR 기반 경유지 최적화 설계</strong></summary>

<br/>

**동승자 QR 접속 → 지도 핀으로 목적지 선택 → 경유 순서 비교**

- **목적지 수집:** 별도 앱 설치 없이 모바일 웹에서 동승자 목적지 수집
- **탐색:** 최대 4개 동승자 목적지에 대해 **24개(4!) 순서 전수 비교** 설계
- **사용자 흐름:** 경유 순서 고정·변경, 경유지 건너뛰기, 조건 변경 시 재계산
- **목표:** 운전 중 입력·주의 분산을 최소화하는 차량용 사용자 경험

</details>

## Education & Awards

| Date | Experience |
| :-- | :-- |
| **2026.11** | **Grand Prize (1st Place)** — Hackathon, *Pictory* |
| **2026.06 – 2026.08** | **Generative AI Bootcamp**, TEAM MECHU |
| **2021 – 2027.02** | **Computer Engineering**, Hyupsung University (Expected Graduation) |

## GitHub Activity

<div align="center">
  <img width="100%" src="https://github-readme-activity-graph.vercel.app/graph?username=kimps005&bg_color=0d1117&color=8b949e&line=58a6ff&point=79c0ff&area=true&area_color=1f6feb&hide_border=true&custom_title=Contribution%20Activity" alt="GitHub contribution activity" />
</div>

---

<div align="center">
  <a href="mailto:kimps005@gmail.com">Email</a> · <a href="https://github.com/kimps005">GitHub</a> · <a href="https://huggingface.co/kimps005/sms-category-model">Hugging Face</a>
</div>
