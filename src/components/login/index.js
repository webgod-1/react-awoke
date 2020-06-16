import React from 'react';
import styled from "styled-components";

import { Button, Form } from 'semantic-ui-react'

const LoginWrapper = styled.div`
    width: 100%;
    min-height: calc(100vh - 125px);
    max-height: 100%;
    display: flex;
    align-items: center;
`;

const LoginSection = styled.div`
    max-width: 400px;
    margin: auto;    
    width: 100%;
    padding: 50px;
    box-shadow: -2px 18px 50px -19px rgba(107,107,107,1);
    border-radius: 16px;

    h4 { 
        font-size: 30px;
        margin-bottom: 30px;
    }

    .ui.form .field>label {
        font-weight: normal;
        text-align: left;
    }

    .ui.form input:focus {
        border: 1px solid #384586;
    }

    .ui.button.primary-button {
        margin: 20px auto 0;
        padding: 15px;
        font-size: 14px;
        width: 100%;
        position: relative;
    }

    @media screen and (max-width: 450px) {
        box-shadow: none;
        border: none;
        padding: 10% 10px;
    }
`;

const Login = () => (
    <LoginWrapper id="login">
        <LoginSection>
            <Form>
                <h4>Login</h4>
                <Form.Field>
                    <label>User Name</label>
                    <input placeholder='User Name' />
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input placeholder='Password' type="password" />
                </Form.Field>
                <Button className="primary-button" type='submit'>Submit</Button>
            </Form> 
        </LoginSection>
    </LoginWrapper>
);

export default Login;