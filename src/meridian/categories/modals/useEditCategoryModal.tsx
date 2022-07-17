import React from 'react';

import { t } from '@lingui/macro';

import { Button, TextInput } from '@mantine/core';
import { useModals } from '@mantine/modals';

import { commonModalConfiguration } from 'meridian/generic';
import { useCloseLastModal, useCreateResource } from 'meridian/hooks';
import { Category } from 'meridian/models';
import { Resource } from 'meridian/resource';

interface Props {
    category: Category;
}

const EditCategoryModal = ({ category: categoryToEdit }: Props) => {
    const closeLastModal = useCloseLastModal();
    const [category, setCategory] = React.useState(categoryToEdit);
    const createCategory = useCreateResource(Resource.CATEGORIES);

    const onValueChanged = (value: string, field: keyof Category) =>
        setCategory({ ...category, [field]: value });

    const onSubmit = React.useCallback(
        (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            if (category.savePath !== '') {
                createCategory({ category, editExisting: true });
                closeLastModal();
            }
        },
        [closeLastModal, category, createCategory],
    );

    return (
        <form onSubmit={onSubmit}>
            <TextInput
                mt='md'
                label='Save path'
                value={category.savePath}
                onChange={(event) => onValueChanged(event.target.value.toString(), 'savePath')}
            />
            <Button type='submit' mt='md' fullWidth>
                Submit
            </Button>
        </form>
    );
};

const useEditCategoryModal = () => {
    const modals = useModals();

    return (category: Category) =>
        modals.openModal({
            title: `${t`Edit`} ${category.name}`,
            children: <EditCategoryModal category={category} />,
            ...commonModalConfiguration,
        });
};

export default useEditCategoryModal;
