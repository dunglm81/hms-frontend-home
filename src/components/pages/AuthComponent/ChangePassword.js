import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { getFieldError } from '../../../utils/util';
import styles from "./Auth.module.css";

const initSubmitObj = [
    {
        key: "current_password",
        keyAlt: "Current Password",
        value: "",
        errorMessage: "",
        isCheck: false
    },
    {
        key: "new_password",
        keyAlt: "New Password",
        value: "",
        errorMessage: "",
        isCheck: false
    },
    {
        key: "confirm_new_password",
        keyAlt: "Confirm New Password",
        value: "",
        errorMessage: "",
        isCheck: false
    }
];

const ChangePasswordComponent = () => {
    const [submitObj, setSubmitObj] = useState(initSubmitObj);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChangeInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setSubmitObj(
            submitObj.map(item => {
                if(item.key === name) {
                    item.value = value;
                    item.errorMessage = getFieldError(name, value);
                }
                return item;
            })
        )
    };

    const handleSubmitInput = (event) => {
        event.preventDefault();
        if (checkValidation()) {
            setIsSubmitting(true);
        }
    }

    const checkValidation = () => {
        let isValidateF = true;
        // if (!currentPassword || !newPassword || !confirmNewPassword) {
        //     isValidateF = false;
        // }
        // if (newPassword !== confirmNewPassword) {
        //     isValidateF = false
        // }
        // setIsValidate(isValidateF);
        return isValidateF;
    }

    return (
        <div className={styles.formCustom}>
            <div className={styles.formContainer}>
                <Form
                    onSubmit={(e) => {
                        handleSubmitInput(e);
                    }}
                >
                    {
                        submitObj.map((item, idx) => {
                            return (
                                <Form.Group controlId="formBasicEmail" key={idx}>
                                    <Form.Label>{item.keyAlt}</Form.Label>
                                    <Form.Control
                                        type={item.key}
                                        name={item.key}
                                        value={item.value}
                                        onChange={(e) => {
                                            handleChangeInput(e);
                                        }}
                                        onBlur={(e) => {
                                            item.isCheck = true;
                                        }}
                                    />
                                    {(item.errorMessage && item.isCheck) ? <div>{item.errorMessage}</div> : null}
                                </Form.Group>
                            )
                        })
                    }

                    <Button variant="primary" type="submit">
                        Submit
                {isSubmitting ? <FontAwesomeIcon className="ml-2" icon="spinner" pulse /> : null}
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default ChangePasswordComponent;