import styled from 'styled-components';

//我们一般开始时便会给最外层的div设置一个HeaderWrapper
export const HeaderWrapper = styled.div`
    height: 75px;
    background-color: #242424;

  .content{
    height: 70px;
    color: #fff;
    background-color: blue;

    display: flex;
    justify-content: space-between;
  }

  .divider{
    height: 5px;
    background-color: #c20c0c;
  }
`

export const ContentLeft = styled.div`
  .logo{
    display: block;
    width: 176px;
    height: 69px;
    background-position: 0 0;
  }
`

export const ContentRight = styled.div`

`
