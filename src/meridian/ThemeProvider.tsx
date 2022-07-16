import React from 'react';
import { selectSettings } from 'meridian/settings';
import { useSelector } from 'react-redux';
import { MantineProvider, MantineThemeOverride } from '@mantine/core';

interface Props {
    children: React.ReactNode;
}

const ThemeProvider = ({ children }: Props) => {
    const settings = useSelector(selectSettings);
    const theme: MantineThemeOverride = React.useMemo(
        () => ({
            colorScheme: settings.darkMode ? 'dark' : 'light',
        }),
        [settings],
    );
    document.body.style.backgroundColor = settings.darkMode ? '#2C2E33' : '#FFFFFF';

    return <MantineProvider theme={theme}>{children}</MantineProvider>;
};

export default ThemeProvider;
