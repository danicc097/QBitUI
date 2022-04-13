import React from 'react';
import { t } from '@lingui/macro';
import {
    Accordion,
    Button,
    PasswordInput,
    Switch,
    TextInput,
} from '@mantine/core';
import { useModals } from '@mantine/modals';
import usePreferences from './usePreferences';

const PreferencesModal = () => {
    const { onSave, preferences, updatePreferencesKey } = usePreferences();

    return (
        <>
            <Accordion multiple>
                <Accordion.Item label={t`When adding a torrent`}>
                    <Switch
                        label={t`Create subfolder for torrents with multiple files`}
                        checked={preferences?.create_subfolder_enabled || false}
                        onChange={value =>
                            updatePreferencesKey(
                                'create_subfolder_enabled',
                                value.target.checked
                            )
                        }
                    />
                    <Switch
                        mt='md'
                        label={t`Do not start the download automatically`}
                        checked={preferences?.start_paused_enabled || false}
                        onChange={value =>
                            updatePreferencesKey(
                                'start_paused_enabled',
                                value.target.checked
                            )
                        }
                    />
                </Accordion.Item>
                <Accordion.Item label={t`Public settings`}>
                    <Switch
                        label={t`Pre-allocate disk space for all files`}
                        checked={preferences?.preallocate_all || false}
                        onChange={value =>
                            updatePreferencesKey(
                                'preallocate_all',
                                value.target.checked
                            )
                        }
                    />
                    <Switch
                        mt='md'
                        label={t`Append .!qb extension to incomplete files`}
                        checked={preferences?.incomplete_files_ext || false}
                        onChange={value =>
                            updatePreferencesKey(
                                'incomplete_files_ext',
                                value.target.checked
                            )
                        }
                    />
                </Accordion.Item>
                <Accordion.Item label={t`Saving management`}>
                    <TextInput
                        label={t`Save path`}
                        value={preferences?.save_path || ''}
                        onChange={value =>
                            updatePreferencesKey(
                                'save_path',
                                value.target.value
                            )
                        }
                    />
                    <Switch
                        mt='md'
                        label={t`Automatic torrent management`}
                        checked={preferences?.auto_tmm_enabled || false}
                        onChange={value =>
                            updatePreferencesKey(
                                'auto_tmm_enabled',
                                value.target.checked
                            )
                        }
                    />
                    <Switch
                        mt='md'
                        label={t`Relocate torrent when category changes`}
                        checked={
                            preferences?.category_changed_tmm_enabled || false
                        }
                        onChange={value =>
                            updatePreferencesKey(
                                'category_changed_tmm_enabled',
                                value.target.checked
                            )
                        }
                    />
                    <Switch
                        mt='md'
                        label={t`Relocate torrent when save path changes`}
                        checked={
                            preferences?.save_path_changed_tmm_enabled || false
                        }
                        onChange={value =>
                            updatePreferencesKey(
                                'save_path_changed_tmm_enabled',
                                value.target.checked
                            )
                        }
                    />
                    <Switch
                        mt='md'
                        label={t`Relocate torrent when it changes`}
                        checked={
                            preferences?.torrent_changed_tmm_enabled || false
                        }
                        onChange={value =>
                            updatePreferencesKey(
                                'torrent_changed_tmm_enabled',
                                value.target.checked
                            )
                        }
                    />
                    <Switch
                        mt='md'
                        label={t`Keep incomplete torrents in temporary directory`}
                        checked={preferences?.temp_path_enabled || false}
                        onChange={value =>
                            updatePreferencesKey(
                                'temp_path_enabled',
                                value.target.checked
                            )
                        }
                    />
                    {preferences?.temp_path_enabled ? (
                        <TextInput
                            mt='md'
                            label={t`Keep incomplete torrents in`}
                            value={preferences?.temp_path || ''}
                            onChange={value =>
                                updatePreferencesKey(
                                    'temp_path',
                                    value.target.value
                                )
                            }
                        />
                    ) : null}
                    <Switch
                        mt='md'
                        label={t`Autorun program when torrent finishes`}
                        checked={preferences?.autorun_enabled || false}
                        onChange={value =>
                            updatePreferencesKey(
                                'autorun_enabled',
                                value.target.checked
                            )
                        }
                    />
                    {preferences?.autorun_enabled ? (
                        <TextInput
                            mt='md'
                            label={t`Autorun`}
                            value={preferences?.autorun_program || ''}
                            onChange={value =>
                                updatePreferencesKey(
                                    'autorun_program',
                                    value.target.value
                                )
                            }
                        />
                    ) : null}
                </Accordion.Item>
                <Accordion.Item label={t`Web UI`}>
                    <Switch
                        label={t`Alternative webui`}
                        checked={
                            preferences?.alternative_webui_enabled || false
                        }
                        onChange={value =>
                            updatePreferencesKey(
                                'alternative_webui_enabled',
                                value.target.checked
                            )
                        }
                    />
                    {preferences?.alternative_webui_enabled ? (
                        <TextInput
                            mt='md'
                            label={t`Alternative webui path`}
                            value={preferences?.alternative_webui_path || ''}
                            onChange={value =>
                                updatePreferencesKey(
                                    'alternative_webui_path',
                                    value.target.value
                                )
                            }
                        />
                    ) : null}
                    <Switch
                        mt='md'
                        label={t`Bypass authentication for subnets`}
                        checked={
                            preferences?.bypass_auth_subnet_whitelist_enabled ||
                            false
                        }
                        onChange={value =>
                            updatePreferencesKey(
                                'bypass_auth_subnet_whitelist_enabled',
                                value.target.checked
                            )
                        }
                    />
                    {preferences?.bypass_auth_subnet_whitelist_enabled ? (
                        <TextInput
                            mt='md'
                            label={t`Bypassed subnets`}
                            value={
                                preferences?.bypass_auth_subnet_whitelist || ''
                            }
                            onChange={value =>
                                updatePreferencesKey(
                                    'bypass_auth_subnet_whitelist',
                                    value.target.value
                                )
                            }
                        />
                    ) : null}
                    <TextInput
                        autoComplete='new-password'
                        mt='md'
                        label={t`Username`}
                        value={preferences?.web_ui_username || ''}
                        onChange={value =>
                            updatePreferencesKey(
                                'web_ui_username',
                                value.target.value
                            )
                        }
                    />
                    <PasswordInput
                        autoComplete='new-password'
                        mt='md'
                        label={t`Password`}
                        value={preferences?.web_ui_password || ''}
                        onChange={value =>
                            updatePreferencesKey(
                                'web_ui_password',
                                value.target.value
                            )
                        }
                    />
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
