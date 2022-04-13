import React from 'react';
import { t } from '@lingui/macro';
import {
    Avatar,
    Box,
    Button,
    createStyles,
    Paper,
    PasswordInput,
    Text,
    TextInput,
} from '@mantine/core';
import { Page, SegmentedColorSchemeToggle } from 'meridian/generic';
import { useLogin } from 'meridian/hooks';
import { Icons } from 'meridian/icons';
import { LanguagePicker } from 'meridian/i18n';

const LoginPage = () => {
    const styles = useStyles();
    const login = useLogin();
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const onClick = React.useCallback(
        () => login(username, password),
        [username, password]
    );
    return (
        <Page>
            <Box className={styles.classes.root}>
                <Paper withBorder shadow='md' p={30} mt={30} radius='md'>
                    <Box mb={15} className={styles.classes.logo}>
                        <Avatar size='xl' src={Icons.LOGO} />
                        <Text size='xl'>{t`Welcome to QBitUI`}</Text>
                    </Box>
                    <TextInput
                        label={t`Username`}
                        placeholder={t`Enter your username`}
                        value={username}
                        onChange={event => setUsername(event.target.value)}
                        required
                    />
                    <PasswordInput
                        label={t`Password`}
                        placeholder={t`Enter your password`}
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                        required
                        mt='md'
                    />
                    <Box mt={15}>
                        <LanguagePicker />
                    </Box>
                    <Box mt={15}>
                        <Text weight={500} size='sm'>{t`Theme`}</Text>
                        <SegmentedColorSchemeToggle />
                    </Box>
                    <Button onClick={onClick} fullWidth mt='xl'>
                        {t`Sign in`}
                    </Button>
                </Paper>
            </Box>
        </Page>
    );
};

const useStyles = createStyles({
    root: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default LoginPage;
