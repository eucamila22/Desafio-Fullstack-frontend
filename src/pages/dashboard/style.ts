import styled from 'styled-components'
export const ContainerDash = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
        rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
        rgba(0, 0, 0, 0.09) 0px 32px 16px;
`
export const NavBar = styled.div`
    width: 900px;
    height: 72px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 20px;

    p {
        color: #1918a0;
    }

    .btn-profile-logout {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }

    .btn-profile-logout {
        .btn-profile {
            color: #1918a0;
            font-size: 34px;
            cursor: pointer;

            :hover {
                color: #741952;
            }

            :focus {
                color: #741952;
            }
        }

        a {
            font-size: 34px;

            :hover {
                color: #741952;
            }
        }
    }
`

export const DashMain = styled.main`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 20px;

    .title-add {
        display: flex;
        justify-content: space-between;
        align-items: center;

        p {
            color: #1918a0;
            font-size: 24px;
        }

        .add-new {
            color: #1918a0;
            font-size: 46px;
            cursor: pointer;

            :hover {
                color: #741952;
            }
        }
    }

    section {
        width: 100%;
        max-width: 900px;
        height: 100vh;
        padding: 0 10px;
        margin-top: 100px;

        ul {
            height: 500px;
            overflow-x: scroll;
            margin: 70px 0px;
            display: flex;
            flex-direction: column;
            gap: 20px;
            align-items: center;
            flex-wrap: wrap;

            ::-webkit-scrollbar-track {
                background-color: #8d8fff;
            }
            ::-webkit-scrollbar {
                height: 10px;
                width: 0px;
                background: #9a79a8;
            }
            ::-webkit-scrollbar-thumb {
                background: #9a79a8;
            }
        }
    }
`
export const CardContact = styled.li`
    width: 400px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
    list-style: none;
    padding: 20px;
    cursor: pointer;

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

    .edit-form {
        margin-top: 40px;
        height: 400px;
        display: flex;
        flex-direction: column;
        gap: 20px;

        label {
            font-weight: 600;
            font-size: 18px;
            color: #1918a0;
        }

        input {
            width: 100%;
            height: 48px;
            border-radius: 8px;
            padding-left: 10px;
            color: #8d8fff;
            background-color: #eceaff;
            border: 1px solid #8d8fff;
            border-radius: var(--radius);

            font-size: var(--text1);

            :hover {
                background-color: #eceaff;
                border: 1px solid #8d8fff;
            }

            :focus {
                background-color: #eceaff;
            }
        }

        button {
            width: 100%;
            height: 48px;
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
    }
`
export const ModalContainer = styled.div`
    height: 100%;

    .add-contact {
        height: 500px;
        display: flex;
        flex-direction: column;
        gap: 20px;

        label {
            font-weight: 600;
            font-size: 18px;
            color: #1918a0;
        }

        input {
            width: 100%;
            height: 48px;
            border-radius: 8px;
            padding-left: 10px;
            color: #8d8fff;
            background-color: #c6c7f7;
            border: 1px solid #8d8fff;
            border-radius: var(--radius);

            font-size: var(--text1);

            :hover {
                background-color: #eceaff;
                border: 1px solid #8d8fff;
            }

            :focus {
                background-color: #eceaff;
            }
        }

        button {
            width: 100%;
            height: 48px;
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
    }

    .div-btn-profile {
        display: flex;
        align-items: center;

        .delete,
        .download {
            font-size: 38px;
            color: #1918a0;
            margin-right: 40px;
            cursor: pointer;

            :hover {
                background-color: #eceaff;
                border: 2px solid #8d8fff;
                border-radius: 8px;
            }
        }
    }
    
    .btn-cancel {
        color: #1918a0;
        font-size: 38px;
        margin-right: 40px;
        cursor: pointer;

        :hover {
            background-color: #eceaff;
            border: 2px solid #8d8fff;
            border-radius: 8px;
        }
    }

    .profile {
        list-style: none;
        font-size: 30px;
        margin-bottom: 20px;
    }

    .btn-sure-cancel {
        display: flex;
        width: 100%;
        height: 200px;
        align-items: center;
        justify-content: space-around;

        .sure {
            padding: 5px 10px;
            background-color: #8d8fff;
            border: 1px solid #8d8fff;
            border-radius: 8px;
            color: white;
            font-size: 24px;

            :hover {
                background-color: #a1352b;
                border: 1px solid #a1352b;
            }
        }
    }
    .cancel {
        padding: 5px 10px;
        background-color: #c6c7f7;
        border: 1px solid #8d8fff;
        border-radius: 8px;
        color: #1918a0;
        font-size: 24px;
        margin-right: 5px;

        :hover {
            background-color: #8d8fff;
            border: 1px solid #8d8fff;
        }
    }
`
