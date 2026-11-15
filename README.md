<!-- GitHub Profile README | Minsu Choi -->

<div align="center">
  <img width="100%" src="https://capsule-render.vercel.app/api?type=waving&height=165&color=0:0f172a,100:1d4ed8&text=Minsu%20Choi&fontColor=ffffff&fontSize=40&fontAlignY=36&desc=AI%20Engineering%20%7C%20Models%20to%20Services&descSize=17&descAlignY=59" alt="Minsu Choi — AI Engineering" />

  <h3>AI / ML Engineering · AI Service Development</h3>
  <p>협성대학교 컴퓨터공학과 · 2027.02 졸업 예정</p>
  <p><b>모델의 성능을 검증하고, 추론을 최적화하고, 실제 서비스로 연결합니다.</b></p>
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

## Engineering Experience

### 01. [CatchSmishing](https://github.com/kimps005/CatchSmishing) — Multimodal Smishing Analysis

**AI 모델 개발 · OCR · API · 모델 최적화**

텍스트, 캡처 이미지, QR URL을 종합해 스미싱 위험 신호와 분석 근거를 제공하는 서비스입니다.

- **분석 파이프라인:** PaddleOCR · KLUE BERT 문자 유형 분류 · URL 평판/리다이렉트 검사 · Gemini 문맥·이미지 분석을 통합
- **모델 평가:** 학습/평가 데이터의 문장 중복을 점검하고, 120개 하위 유형을 기준으로 그룹 분할 및 반복 평가
- **검증 성능:** 7개 **문자 카테고리 분류**의 Accuracy **96.18 ± 0.21%**, Macro-F1 **96.15 ± 0.21%** (3개 학습 시드)
- **추론 최적화:** FP32 대비 INT8 동적 양자화 모델 **파일 크기 약 58% 감소**, **단일 문자 p50 지연 약 47% 감소** (생성형 SMS 2,800건 로컬 벤치마크)
- **서비스 구성:** FastAPI 분석 API · Flutter 클라이언트 · Hugging Face 모델 배포

**Links:** [Repository](https://github.com/kimps005/CatchSmishing) · [Hugging Face Model](https://huggingface.co/kimps005/sms-category-model) · [Service](https://catchsmishing.com)

<sub>분류 정확도는 7개 문자 유형에 대한 결과이며 스미싱 이진 판별 정확도가 아닙니다. 양자화 수치는 지정된 로컬 벤치마크 기준입니다.</sub>

### 02. Pictory — AI Storytelling Service

**2026 Hackathon · Grand Prize (1st Place)**

어린이가 그린 그림을 동화 캐릭터로 활용하고, 자신의 감정과 고민을 이야기로 표현하도록 돕는 생성형 AI 서비스입니다.

- **서비스 설계:** 아이의 그림과 선택지를 바탕으로 사용자 맞춤형 동화 경험 구성
- **AI 파이프라인:** LLM을 통한 이야기 생성 · 이미지 생성 · 한국어 TTS 음성 낭독
- **결과:** 2026년 11월 해커톤 **대상(전체 1위)** 수상

### 03. [EGGG](https://github.com/dainyeyo/miniproject) — Real-time AI Multiplayer Game

**Real-time Web · AI Integration · Debugging**

AI 이미지 기능 및 LLM 채점을 활용한 멀티플레이 그림 퀴즈 웹 서비스입니다.

- **서비스 구조:** Next.js 14 / React 18 · Node.js WebSocket 서버 · Neon PostgreSQL
- **실시간 통신 개선:** 약 1.2초 주기의 상태 Polling을 **WebSocket 이벤트 기반 통신**으로 전환
- **장애 해결:** 채팅 중복과 타이머 시작·초기화 오류를 원인별로 분리하고 수정
- **검증:** 여러 브라우저에서 입장, 채팅, 타이머, 라운드 전환을 반복 테스트해 시연 완료

**Link:** [Repository](https://github.com/dainyeyo/miniproject)

### 04. LET'S HIM COOK! — Vision-Language-Action Learning

**VLA · Imitation Learning · Unity Simulation**

Unity 식당 시뮬레이션에서 음식 서빙과 빈 트레이 수거를 다루는 VLA 기반 학습 프로젝트입니다.

- **모델:** X-VLA (`lerobot/xvla-base`) 기반 파인튜닝 실험, 약 **30,000 steps**
- **데이터 파이프라인:** 약 **10Hz** RGB·상태·행동 데이터 수집 (512×288 RGB, 256×256 모델 입력)
- **학습 데이터:** 초기 **459 episodes / 50,679 frames** 수집 후 서빙 **300**, 수거 **300** episodes로 과업별 데이터 구성
- **시스템 설계:** 게임 상태·대기 등 규칙 기반 처리를 Unity로 분리하고 모델 학습 범위를 핵심 행동에 집중
- **검증 경험:** 텔레오퍼레이션 및 데이터 수집·학습 흐름 구현과 실험 기록

### 05. MOAGIL — Multi-stop Route Optimization

**Route Optimization · QR Mobile Web · In-vehicle UX**

동승자가 앱 설치 없이 QR 웹에서 목적지를 지정하고, 운전자는 경유 순서를 확인할 수 있도록 설계한 차량용 앱 공모전 프로젝트입니다.

- **목적지 수집:** QR → 모바일 웹 → Kakao Maps 지도 핀 선택
- **경로 탐색:** 최대 4개 동승자 목적지에 대해 **24개(4!) 방문 순서** 전수 비교 설계
- **사용자 흐름:** 목적지 순서 고정·변경, 경유지 건너뛰기, 변경 시 재계산 구조
- **UX 목표:** 운전 중 입력과 주의 분산 최소화

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
