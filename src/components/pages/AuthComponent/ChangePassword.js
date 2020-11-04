import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import authService from '../../../services/auth.service';
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
                if (item.key === name) {
                    item.value = value;
                    item.errorMessage = getFieldError(name, value);
                }
                return item;
            })
        )
    };

    const updateError = () => {
        setSubmitObj(
            submitObj.map(item => {
                item.errorMessage = getFieldError(item.key, item.value);
                return item;
            })
        )
    }

    const handleSubmitInput = (event) => {
        event.preventDefault();
        if (checkValidation()) {
            setIsSubmitting(true);
            const obj = {
                id: authService.getUser().userId,
                data: submitObj
            }
            authService.changePassword(obj).then(response => {
                if (response.status === 200) {

                }
            }).catch(err => {
                console.log(err);
            })
        }
    }

    const checkValidation = () => {
        let isValidateF = true;
        const idx1 = submitObj.findIndex(item => item.key === "current_password");
        const idx2 = submitObj.findIndex(item => item.key === "new_password");
        const idx3 = submitObj.findIndex(item => item.key === "confirm_new_password");
        if (idx1 !== -1 && idx2 !== -1 && idx3 !== -1) {
            if (submitObj[idx1].value === submitObj[idx2].value) {
                setSubmitObj(
                    submitObj.map(item => {
                        if (item.key === "current_password" || item.key === "new_password") {
                            item.errorMessage = "Mật khẩu hiện tại và mật khẩu mới không được trùng nhau!";
                        } else {
                            item.errorMessage = getFieldError(item.key, item.value);
                        }
                        return item;
                    })
                )
                return false;
            } else {
                updateError();
            }

            if (submitObj[idx2].value !== submitObj[idx3].value) {
                setSubmitObj(
                    submitObj.map(item => {
                        if (item.key === "confirm_new_password" || item.key === "new_password") {
                            item.errorMessage = "Xác nhận mật khẩu mới không khớp!";
                        } else {
                            item.errorMessage = getFieldError(item.key, item.value);
                        }
                        return item;
                    })
                )
                return false;
            } else {
                updateError();
            }
        }
        if (submitObj.some(item => item.errorMessage) || submitObj.some(item => !item.value)) {
            return false;
        }

        return isValidateF;
    }

    const startCheckItem = (index) => {
        setSubmitObj(
            submitObj.map((item, idx) => {
                if (idx === index) {
                    item.isCheck = true;
                }
                return item;
            })
        )
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
                                <Form.Group controlId={idx} key={idx}>
                                    <Form.Label>{item.keyAlt}</Form.Label>
                                    <Form.Control
                                        type="password"
                                        name={item.key}
                                        value={item.value}
                                        autoComplete="false"
                                        className={(item.errorMessage && item.isCheck) ? styles.errorInput : ""}
                                        onChange={(e) => {
                                            handleChangeInput(e);
                                        }}
                                        onBlur={() => {
                                            startCheckItem(idx);
                                        }}
                                    />
                                    {(item.errorMessage && item.isCheck) ? <div className={styles.errorMessage}>{item.errorMessage}</div> : null}
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