import React, { memo } from 'react';

import { Text, TextProps } from '@mantine/core';

import { truncateLongText } from 'meridian/utils';

import useIsSmallDevice from './useIsSmallDevice';

const ResponsiveText = ({ children, ...props }: TextProps) => {
    const isSmallDevice = useIsSmallDevice();
    const text = children?.toString() || '';
    return <Text {...props}>{isSmallDevice ? truncateLongText(text) : text}</Text>;
};

export default memo(ResponsiveText);
