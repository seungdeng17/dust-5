import { getElement } from '../util/commonUtil.js';

class DustForecastView {
    constructor() {

    }

    init() {
        this.render();
    }

    render() {
        getElement('.dust-contents-wrap').innerHTML +=
            `<div class="dust-forecast-wrap" data-name="예보" data-type="dust-forecast-content">
                <h2 class="dust-forecast-title">미세먼지 예보</h2>
                <div class="dust-forecast-img-set">
                    <img class="active" src="http://www.airkorea.or.kr/file/viewImage/?atch_id=138877">
                    <img src="http://www.airkorea.or.kr/file/viewImage/?atch_id=138878">
                    <img src="http://www.airkorea.or.kr/file/viewImage/?atch_id=138879">
                    <img src="http://www.airkorea.or.kr/file/viewImage/?atch_id=138880">
                    <img src="http://www.airkorea.or.kr/file/viewImage/?atch_id=138881">
                    <img src="http://www.airkorea.or.kr/file/viewImage/?atch_id=138882">
                </div>
                <div class="dust-forecast-info">
                    <p class="info-text">○ [미세먼지] 원활한 대기 확산으로 대기 상태가 대체로 '보통' 수준일 것으로 예상됨.</p>
                    <p class="grade-text">서울 : 보통,제주 : 좋음,전남 : 좋음,전북 : 보통,광주 : 보통,경남 : 좋음,경북 : 좋음,울산 : 좋음,대구 : 좋음,부산
                        :
                        좋음,충남 : 보통,충북 : 보통,세종 : 보통,대전 : 보통,영동 : 좋음,영서 : 보통,경기남부 : 보통,경기북부 : 보통,인천 : 보통</p>
                </div>
                <div class="dust-forecast-progress">
                    <button class="progress-button">▶</button>
                    <div class="progress-bar">
                        <div class="bar"></div>
                        <div class="bar-button"></div>
                    </div>
                </div>
            </div>`
    }

    setViewElements() {

    }
}

export default DustForecastView;