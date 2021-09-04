import styled from "styled-components";

export const ButtonContainer = styled.button`
    text-transform: capitalize;
    font-size: 1.4rem;
    background: transparent;
    color: var(--mainBlue);
    border: 1px solid var(--mainBlue);
    border-radius: 10px;
    &:hover {
        background: var(--lightBlue);
        color: var(--mainBlue);
    }
`;