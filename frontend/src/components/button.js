import React from 'react';
import classNames from 'classnames';  // classNameに複数項目指定する場合に便利
import PropTypes from 'prop-types';  // 引数の型を指定する場合に必要
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import SendIcon from '@material-ui/icons/Send';

// 参考
// https://qiita.com/yasudadesu/items/488becb22276e334559f

// 作成するコンポネントのスタイルを設定する
const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    leftIcon: {
        marginRight: theme.spacing.unit,  // 通常のCSSの場合ハイフンで区切る(margin-right)ところを繋いで大文字にする
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
    iconSmall: {
        fontSize: 20,
    },
});

function IconLabelButton(props) {
    const { classes, type, disabled, variant, color, value, iconClassName, onClick } = props;
    return (
        <Button
            variant={variant}
            color={color}
            className={classes.button}
            disabled={disabled}
            type={type}
            onClick={onClick}
        >
            {value}
            {iconClassName === 'delete' &&  // 外から渡されたiconClassNameの値によって変化するようにします
                <DeleteIcon className={classNames(classes.rightIcon, classes.iconSmall)} />
            }
            {iconClassName === 'send' &&
                <SendIcon className={classNames(classes.rightIcon, classes.iconSmall)} />
            }
        </Button>
    );
}

IconLabelButton.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IconLabelButton);