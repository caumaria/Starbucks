import styled from "styled-components";


export const CartItemContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    font-size: .75rem;

    img {
        width: 125px;
        height: 75px;
        object-fit: cover;
    }
`;