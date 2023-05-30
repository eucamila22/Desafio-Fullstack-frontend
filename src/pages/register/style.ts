import styled from 'styled-components'

export const RegisterContainer = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;

    div {
        display: none;
    }

    form {
        background-color: #e0dfff;
        border: 4px solid #e0dfff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 90%;
        height: 80vh;
        border-radius: 0 20px 0 20px;
        padding: 20px;
    }

    form > h2 {
        color: #1918a0;
        font-size: 42px;
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
    }

    form > label {
        color: #1918a0;
        padding: 10px 0;
    }

    form > input {
        width: 100%;
        height: 48px;
        border: 1px solid #8d8fff;
        border-radius: 8px;
    }

    input::placeholder {
        margin-left: 20px;
    }

    button {
        width: 100%;
        height: 48px;
        margin: 20px 0;
        background-color: #c6c7f7;
        border: 1px solid #8d8fff;
        border-radius: 8px;
        color: #1918a0;

        :hover {
            background-color: #8d8fff;
            border: 1px solid #8d8fff;
        }
    }

    a {
        text-decoration: none;
        color: #1918a0;

        :hover {
            color: #b256df;
        }
    }

    @media (min-width: 700px) {
        display: flex;
        flex-direction: row;

        div {
            display: flex;
            width: 50%;
            max-width: 600px;
            height: 80vh;
            border-radius: 0 20px 0 0;
        }

        div > img {
            display: flex;
            width: 100%;
            height: 80vh;
            object-fit: cover;
            border-radius: 0 20px 0 0;
        }

        form {
            width: 50%;
            max-width: 600px;

            height: 80vh;
            border-radius: 0 0 0 20px;
        }
    }
`
