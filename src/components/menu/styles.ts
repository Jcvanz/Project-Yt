import styled from "styled-components";

export const Container = styled.div<{openMenu: boolean}>`
    width: ${({openMenu}) => openMenu? '250px' : '90px'};
    height: calc(100vh - 55px);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 10px;
    overflow-y: auto;
    overflow-x: hidden;
    position: sticky;
    top: 55px;
`;

export const MenuItem = styled.div<{openMenu: boolean}>`
    width: 98%;
    min-height: ${({openMenu}) => openMenu? '45px' : '70px'};
    border-radius: 10px;
    cursor: pointer;
    padding: 2px 20px;
    box-sizing: border-box;
    display: ${({openMenu}) => openMenu? 'flex' : 'flex'};
    flex-direction: ${({openMenu}) => openMenu? 'row' : 'column'};
    align-items: center;
    justify-content: ${({openMenu}) => openMenu? 'none' : 'center'};
    
    span {
        font-weight: ${({openMenu}) => openMenu? '400' : '400'};
        margin-left: ${({openMenu}) => openMenu? '20px' : 'none'};
        font-size: ${({openMenu}) => openMenu? '13.5px' : '12px'};
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    &:hover {
        background-color: #f2f2f2;
    }
`;

export const ButtonIcon = styled.img`
    width: 20px;
`;

export const Divider = styled.div<{openMenu: boolean}>`
    width: ${({openMenu}) => openMenu? '95%' : 'none'};
    margin: ${({openMenu}) => openMenu? '10px 0 10px 0' : '0'};
    border-top: 1px solid #d5f2;
`;

export const SpanTitle = styled.span<{openMenu: boolean}>`
    display: ${({openMenu}) => openMenu? 'flex' : 'none'};
    width: 80%;
    box-sizing: border-box;
    margin: 0 0 10px 0;
    font-size: 16px;
    font-weight: 500;
`;