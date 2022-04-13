import React from 'react';
import { t } from '@lingui/macro';
import { Accordion, Button } from '@mantine/core';
import { useModals } from '@mantine/modals';
import usePreferences from './usePreferences';
import {
    GeneralSection,
    SavingManagementSection,
    TorrentSection,
    WebUiSection,
} from './sections';

const PreferencesModal = () => {
    const { onSave, preferences, updatePreferencesKey } = usePreferences();

    const sectionProps = {
        preferences,
        updatePreferencesKey,
    };

    return (
        <>
            <Accordion multiple>
                <Accordion.Item label={t`Torrents`}>
                    <TorrentSection {...sectionProps} />
                </Accordion.Item>
                <Accordion.Item label={t`General`}>
                    <GeneralSection {...sectionProps} />
                </Accordion.Item>
                <Accordion.Item label={t`Saving management`}>
                    <SavingManagementSection {...sectionProps} />
                </Accordion.Item>
                <Accordion.Item label={t`Web UI`}>
                    <WebUiSection {...sectionProps} />
                </Accordion.Item>
            </Accordion>
            <Button mt='md' fullWidth onClick={onSave}>{t`Save`}</Button>
        </>
    );
};

const usePreferencesModal = () => {
    const modals = useModals();

    return () =>
        modals.openModal({
            title: t`Preferences`,
            children: <PreferencesModal />,
            centered: true,
        });
};

export default usePreferencesModal;
