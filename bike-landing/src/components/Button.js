import styled from 'styled-components'

export const Button = styled.button`
    background: ${({primary}) => (primary ? '#0098DA' : '#6ABD50')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '20px 40px': '14px 28px')};
    color: #f9f9f9;
    font-size: ${({big}) => (big ? '25px': '20px')};
    outline: none;
    border: none;
    min-width: ${({small}) => (small ? '140px': '400px')};;
    cursor: pointer;
    text-decoration: none;
    transition: 0.3s !important;
    border-radius: ${({round }) => (round ? '50px': 'none')};

    &:hover {
        background: ${({primary}) => (primary ? '#6ABD50' : '#0098DA')};
        transform: translateY(-2px);
    }
`