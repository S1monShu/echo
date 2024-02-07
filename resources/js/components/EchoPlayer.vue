<template>
    <div class="player-container">
        <audio
            src="https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-61905/zapsplat_multimedia_alert_chime_short_musical_notification_cute_child_like_001_64918.mp3?_=1"></audio>
        <div class="player-overlay">
            <div class="info-container">
                <b>Nocrune Op.9 No.2</b>
                <p>Фридерик Шопен</p>
            </div>
            <div class="basic_actions__btns">
                <div class="shuffle btn">
                    <img :src="'/icons/ri_shuffle-fill.png'" alt="">
                </div>
                <div class="back btn">
                    <img :src="'/icons/mdi_back.png'" alt="">
                </div>
                <div class="play__btn">
                    <div class="left corner"></div>
                    <div class="right corner"></div>
                    <img :src="'/icons/mdi_play.png'" alt="">
                </div>
                <div class="forward btn">
                    <img :src="'/icons/mdi_forward.png'" alt="">
                </div>
                <div class="loop btn">
                    <img :src="'/icons/ri_repeat-fill.png'" alt="">
                </div>
            </div>
            <div class="more_actions__btns">
                <div class="playlist btn">
                    <img :src="'/icons/ri_play-list-line.png'" alt="">
                </div>
                <div class="volume_control">
                    <img :src="'/icons/ri_headphone-line.png'" alt="">
                </div>
                <div class="fav btn">
                    <img :src="'/icons/fav_active.png'" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.info-container {
    color: #fff;
    padding-left: 25px;
}

.info-container p {
    margin-top: 15px;
    margin-bottom: 0px;
}

.more_actions__btns {
    display: flex;
    align-items: center;
}



.player-overlay {
    background-color: #141316;
    width: 1880px;
    height: 86px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.basic_actions__btns {
    display: flex;
    align-items: center;
    gap: 7px;
}

.btn {
    padding: 25px;
    cursor: pointer;
}

.shuffle {
    padding: 0px;
}

.loop {
    padding: 0px;
}

.fav {
    padding: 15px;
}

.play__btn {
    position: relative;
    cursor: pointer;
    background-color: #2CA8FC;
    width: fit-content;
    height: 49px;
    line-height: 40px;
    text-align: center;
    border-top: 2px solid #fff;
    border-bottom: 2px solid #fff;
    filter: drop-shadow(0px 0px 6px #2CA8FC);
}

.play__btn::before,
.play__btn::after {
    position: absolute;
    content: '';
    width: 15px;
    height: 36px;
}

.play__btn::before {
    background-color: #2CA8FC;
    left: -16.3px;
    bottom: -2px;
    border-left: 2px solid #fff;
    border-bottom: 2px solid #fff;
}

.play__btn::after {
    background-color: #2CA8FC;
    right: -16.3px;
    top: -2px;
    border-top: 2px solid #fff;
    border-right: 2px solid #fff;
}

.corner {
    position: absolute;
    width: 21px;
    height: 21px;
    transform: 50% 50% 0;
    transform: rotate(45deg);
    background-color: #2CA8FC;
}

.left {
    top: 3px;
    left: -11.7px;
    border-left: 2px solid #fff;
}

.right {
    bottom: 3px;
    right: -11.7px;
    border-right: 2px solid #fff;
}

.play__btn img {
    position: relative;
    z-index: 2;
    top: 20%;
}
</style>
