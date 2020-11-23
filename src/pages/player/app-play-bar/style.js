import styled from 'styled-components';

export const AppPlayBarWrapper = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 50px;
    background-position: 0 0;
    background-repeat: repeat;

    .content {
        display: flex;
        justify-content: space-between;
        margin: 0px auto;
        width: 980px;

        .control {
            display: flex;
            margin-top: 3px;
            align-items: center;

            .prev, .next {
                width: 28px;
                height: 28px;
            }

            .prev {
                background-position: 0 -130px;
            }

            .play {
                width: 36px;
                height: 36px;
                margin: 0 8px;
                background-position: 0 ${props => props.isPlaying ? "-165px": "-204px"};
            }

            .next {
                background-position: -80px -130px;
            }
        }

        .playInfo {
            display: flex;
            margin-top: 10px;
            color: #a1a1a1;

            .image {
                width: 34px;
                height: 34px;
                border-radius: 5px;
            }

            .song {
                margin-left: 20px;

                .ant-slider {
                    width: 493px;
                    margin-top:4px;
                    margin-right: 10px;
            
                    .ant-slider-rail {
                      height: 9px;
                      background: url(${require("@/assets/img/progress_bar.png")}) right 0;
                    }
            
                    .ant-slider-track {
                      height: 9px;
                      background: url(${require("@/assets/img/progress_bar.png")}) left -66px;
                    }
            
                    .ant-slider-handle {
                      width: 22px;
                      height: 24px;
                      border: none;
                      margin-top: -7px;
                      background: url(${require("@/assets/img/sprite_icon.png")}) 0 -250px;
                    }
                  }
            }

            .time {
                margin-top: 20px;
                margin-left: 10px;
            }
        }

        .operator {
            display: flex;

            .left {
                margin-top: 15px;
                
                .btn {
                    width: 25px;
                    height: 25px;
                }
    
                .favor {
                    background-position: -88px -163px;
                }
    
                .share {
                    background-position: -114px -163px;
                }
            }

            .right {
                display: flex;
                align-items: center;
                width: 126px;
                padding-left: 13px;
                background-position: -147px -248px;
                
                .btn {
                    width: 25px;
                    height: 25px;
                }
                .volume {
                background-position: -2px -248px;
                }

                .loop {
                    background-position: ${props => {
                        switch(props.sequence) {
                        case 1:
                            return "-66px -248px";
                        case 2:
                            return "-66px -344px";
                        default:
                            return "-3px -344px";
                        }
                    }};
                }

                .playlist {
                    padding-left: 18px;
                    text-align: center;
                    color: #ccc;
                    width: 59px;
                    background-position: -42px -68px;
                }
            }
        }
    }
`