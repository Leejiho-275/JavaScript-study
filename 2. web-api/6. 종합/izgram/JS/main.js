// 선택자 상수
const THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';

// 썸네일 이미지 배열을 만들어주는 함수
function getThumbnailArray() {
    const $thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
    // const thumbsArray=[...$thumbnails];
    // return thumbsArray;
    return [...$thumbnails];
}

// 썸네일을 detail영역에 배치하는 함수
function setDetailsFromThumb($thumbnailAnchor) {
    const imgUrl = $thumbnailAnchor.dataset.imageUrl;
    const title = $thumbnailAnchor.dataset.imageTitle;

    const $detailImage = document.querySelector('[data-image-role="target"]');
    $detailImage.setAttribute('src', imgUrl);

    const $detailImageTitie = document.querySelector('[data-image-role="title"]');
    $detailImageTitie.textContent = title;
}

// 랜덤으로 image-frame에 썸네일을 배치하는 함수
function randomFirstDetail(thumbnails) {
    const rn = Math.floor(Math.random() * thumbnails.length);

    //랜덤썸네일을 detail-image영역에 배치
    setDetailsFromThumb(thumbnails[rn]);
}

// 디테일 영역을 안보이게 하는 함수
function hideDetails() {
    document.body.classList.add('hidden-detail');
}

// 메인 즉시실행 함수
/*
(function (thumbsArray) {
}(getThumbnailArray))
*/
(function () {
    const thumbsArray = getThumbnailArray();
    randomFirstDetail(thumbsArray);

    // 이미지 썸네일 클릭 이벤트
    document.querySelector('.thumbnail-list').addEventListener('click', function (e) {
        e.preventDefault(); // 태그의 기본 기능 중지

        if (!e.target.matches('[data-image-role="trigger"] img')) {
            return;
        }

        setDetailsFromThumb(e.target.parentElement);
        document.body.classList.remove('hidden-detail');
    });

    // ESC를 눌렀을 때 작동하는 이벤트
    document.body.addEventListener('keyup', function (e) {
        if (e.key === 'Escape') {
            hideDetails();
        }
    });
}());