// import styled from 'styled-components'

// export const RegisterContainer = styled.main`
//     width: 100%;
//     height: 100vh;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     padding: 20px;

//     div {
//         display: none;
//     }

//     form {
//         background-color: #e0dfff;
//         border: 4px solid #e0dfff;
//         display: flex;
//         flex-direction: column;
//         justify-content: center;
//         align-items: center;
//         width: 90%;
//         height: 80vh;
//         border-radius: 0 20px 0 20px;
//         padding: 20px;
//     }

//     form > h2 {
//         color: #1918a0;
//         font-size: 42px;
//         display: flex;
//         justify-content: center;
//         margin-bottom: 20px;
//     }

//     form > label {
//         color: #1918a0;
//         padding: 10px 0;
//     }

//     form > input {
//         width: 100%;
//         height: 48px;
//         border: 1px solid #8d8fff;
//         border-radius: 8px;
//     }

//     input::placeholder {
//         margin-left: 20px;
//     }

//     button {
//         width: 100%;
//         height: 48px;
//         margin: 20px 0;
//         background-color: #c6c7f7;
//         border: 1px solid #8d8fff;
//         border-radius: 8px;
//         color: #1918a0;

//         :hover {
//             background-color: #8d8fff;
//             border: 1px solid #8d8fff;
//         }
//     }

//     a {
//         text-decoration: none;
//         color: #1918a0;

//         :hover {
//             color: #b256df;
//         }
//     }

//     @media (min-width: 700px) {
//         display: flex;
//         flex-direction: row;

//         div {
//             display: flex;
//             width: 50%;
//             max-width: 600px;
//             height: 80vh;
//             border-radius: 0 20px 0 0;
//         }

//         div > img {
//             display: flex;
//             width: 100%;
//             height: 80vh;
//             object-fit: cover;
//             border-radius: 0 20px 0 0;
//         }

//         form {
//             width: 50%;
//             max-width: 600px;

//             height: 80vh;
//             border-radius: 0 0 0 20px;
//         }
//     }
// `

import styled from 'styled-components'

export const DivFormRegisterStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #87adc9;
    border-radius: var(--radius);
    box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
    max-width: 360px;
    height: 600px;
    margin: 100px auto;
    color: var(--grey-0);

    h2 {
        font-weight: var(--weight1);
        font-size: var(--tile1);
        color: var(--grey-0);
    }

    form {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: flex-end;
        align-items: flex-start;
        margin-bottom: 80px;

        label {
            font-weight: var(--weight4);
            font-size: 14px;
            color: var(--grey-0);
            margin: 10px 0;
        }

        input {
            width: 265px;
            height: 40px;
            padding-left: 10px;
            color: #8d8fff;
            background-color: #c6c7f7;
            border: 1px solid #8d8fff;
            border-radius: var(--radius);

            font-size: var(--text1);

            :hover {
                background-color: #8d8fff;
                border: 1px solid #8d8fff;
            }

            :focus {
                background-color: #c6c7f7;
            }
        }

        button {
            width: 265px;
            height: 40px;
            background-color: #c6c7f7;
            border: 1px solid #8d8fff;
            border-radius: var(--radius);
            margin-top: 20px;
            color: #1918a0;

            font-size: var(--tile1);

            :hover {
                background-color: #8d8fff;
                border: 1px solid #8d8fff;
            }

            :focus {
                background-color: #c6c7f7;
            }
        }

        div {
            width: 265px;
            height: 20px;

            p {
                font-weight: var(--weight4);
                font-size: 14px;
                color: var(--grey-0);
                text-align: center;
                margin: 27px 0 18px 0;
            }

            a {
                width: 265px;
                height: 40px;
                background-color: #c6c7f7;
                border: 1px solid #8d8fff;
                color: #1918a0;
                border-radius: var(--radius);
                display: flex;
                justify-content: center;
                align-items: center;
                text-decoration: none;
                font-size: var(--tile1);

                :hover {
                    background-color: #8d8fff;
                    border: 1px solid #8d8fff;
                }

                :focus {
                    background-color: #c6c7f7;
                }
            }
        }
    }
`
