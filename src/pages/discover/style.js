import styled from 'styled-components';

export const DiscoverWrapper = styled.div`
  .top{
    height: 30px;
    background-color: #c20c2c;
  }
`

export const TopMenu = styled.div`
  display: flex;
  padding-left: 180px;
  position: relative;
  top: -5px;

  .item{
    a{
      display: inline-block;
      height: 20px;
      line-height: 20px;
      padding: 0 13px;
      margin: 7px 17px 0;
      color: #fff;

      &:hover, &.active{
        background-color: #9B0909;
        text-decoration: none;
        border-radius: 20px;
      } 
    }
  }
`