import styled from 'styled-components'

export const DashContainer = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    .container-nav {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
            rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
            rgba(0, 0, 0, 0.09) 0px 32px 16px;
    }

    .nav {
        width: 80%;
        height: 110px;
        padding: 0 10px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .btn-profile-logout {
        display: flex;
        gap: 10px;
    }

    .nav > p {
        color: #1918a0;
        font-size: 24px;
    }

    .btn-profile-logout {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .btn-profile-logout > button {
        padding: 5px 10px;
        background-color: #c6c7f7;
        border: 1px solid #8d8fff;
        border-radius: 8px;
        color: #1918a0;
        font-size: 18px;

        :hover {
            background-color: #8d8fff;
            border: 1px solid #8d8fff;
        }
    }

    .btn-profile-logout > a {
        text-decoration: none;
        color: #1918a0;
        font-size: 18px;

        :hover {
            color: #b256df;
        }
    }

    section {
        width: 80%;
        height: 100vh;
        padding: 0 10px;
        margin-top: 70px;
    }

    section > ul {
        max-height: 550px;
        overflow: scroll;
        margin-top: 70px;
        display: flex;
        flex-direction: column;
        gap: 20px;

        ::-webkit-scrollbar-track {
            background-color: #8d8fff;
        }
        ::-webkit-scrollbar {
            height: 0px;
            width: 6px;
            background: #9a79a8;
        }
        ::-webkit-scrollbar-thumb {
            background: #9a79a8;
        }
    }

    .title-add {
        display: flex;
        justify-content: space-between;
        align-items: center;

        p {
            color: #1918a0;
            font-size: 20px;
        }

        button {
            padding: 5px 10px;
            background-color: #c6c7f7;
            border: 1px solid #8d8fff;
            border-radius: 8px;
            color: #1918a0;
            font-size: 18px;

            :hover {
                background-color: #8d8fff;
                border: 1px solid #8d8fff;
            }
        }
    }

    @media (min-width: 700px) {
        section {
            max-width: 900px;
        }

        section > ul {
            max-height: 550px;
            overflow-y: scroll;
            margin-top: 20px;
            display: flex;
            gap: 30px;
            flex-direction: column;
            flex-wrap: wrap;
            align-items: center;

            ::-webkit-scrollbar {
                height: 6px;
                width: 0px;
                background: #8d8fff;
            }
        }
    }
    .nav {
        height: 80px;
        max-width: 900px;
    }
`
export const CardContact = styled.li`
    width: 300px;
    height: 200px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
    list-style: none;
    padding: 20px;

    :hover {
        box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    }

    p {
        color: #4c448f;
        font-size: 20px;
        line-height: 150%;
    }

    button {
        padding: 5px 10px;
        background-color: #c6c7f7;
        border: 1px solid #8d8fff;
        border-radius: 8px;
        color: #1918a0;
        font-size: 18px;
        margin: 30px 10px 0 0;

        :hover {
            background-color: #8d8fff;
            border: 1px solid #8d8fff;
        }
    }
`
export const ModalContainer = styled.div`
    height: 100%;
    background-color: #c6c7f7;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;

    p {
        font-size: 30px;
        font-weight: 600;
        color: red;
        text-align: center;

        span {
            color: #007ac0;
        }
    }

    .add-contact {
        display: flex;
        flex-direction: column;
        gap: 20px;

        input,
        button {
            width: 100%;
            height: 48px;
            border: 1px solid #8d8fff;
            border-radius: 8px;
        }
    }

    .profile {
        list-style: none;
        p {
            color: #1918a0;
            font-size: 18px;
        }
    }

    .delete-account {
        padding: 5px 10px;
        background-color: #c6c7f7;
        border: 1px solid #8d8fff;
        border-radius: 8px;
        color: #1918a0;
        font-size: 18px;
        margin: 30px 10px 0 0;

        :hover {
            background-color: #8d8fff;
            border: 1px solid #8d8fff;
        }
    }
`
