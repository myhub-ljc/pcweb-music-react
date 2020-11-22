import styled from 'styled-components';

export const SongsCover = styled.div`
    width: 140px;
    height: 180px;
    margin-top: 20px;
    .top-cover {
        position: relative;

        img {
            width: 140px;
            height: 140px;
        }

        .info {
            line-height: 25px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 10px;
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            color: #fff;
            background: black;
            opacity: 0.5;
            .erji {
                display: inline-block;
                width: 14px;
                height: 11px;
                background-position: 0 -24px;
                margin-right: 5px;
            }

            .play {
                display: inline-block;
                width: 16px;
                height: 17px;
                background-position: 0 0;
                margin-top: 6px;
            }
        }
    }

    .middle-cover {
        font-size: 14px;
        color: #000;
        margin-top: 10px;
    }

    .bottom-cover {
        color: #666;
    }
`