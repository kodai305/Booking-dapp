import React from 'react';
import { Field, reduxForm } from 'redux-form';

import renderTextField from './textField'; 
import IconLabelButton from './button';

const IssueForm = props => {
    const { handleSubmit, pristine, reset, submitting } = props;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <div>
                    <Field
                        id="name"
                        name="title"
                        label="Ticket Name"
                        component={renderTextField}  // Fieldタグに渡した引数をrenderTextField上で受け取ってくれるようになっている
                        type="text"
                        margin="normal"
                    />
                </div>
            </div>

            <div>
                <div>
                    <Field
                        id="multiline-flexible"
                        name="description"
                        label="Description"
                        component={renderTextField}
                        type="text"
                        multiline
                        rowsMax="4"
                        margin="normal"
                    />
                </div>
            </div>

            <div>
                <IconLabelButton
                    type="submit"
                    variant="contained"
                    color="primary"
                    value="送信"
                    iconClassName="send"
                    disabled={pristine || submitting} />
                <IconLabelButton
                    variant="contained"
                    color="secondary"
                    value="クリア"
                    iconClassName="delete"
                    disabled={pristine || submitting}
                    onClick={reset} />
            </div>
        </form >
    );
}

export default reduxForm({
    form: 'issueForm',
})(IssueForm);