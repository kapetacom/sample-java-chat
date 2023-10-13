import React, { useMemo } from 'react';
import { Box, BoxProps } from '@mui/material';
import { AvatarGenerator } from 'random-avatar-generator';

const generator = new AvatarGenerator();

export interface UserAvatarProps extends BoxProps {
    authorId: string;
    size?: number;
}

export const UserAvatar = (props: UserAvatarProps) => {
    const { size = 40, authorId, sx, ...boxProps } = props;
    const avatarUrl = useMemo(() => generator.generateRandomAvatar(authorId), [authorId]);

    return (
        <Box sx={{ ...sx, mb: `-${size / 3}px` }} {...boxProps}>
            <img src={avatarUrl} alt="avatar" width={size} />
        </Box>
    );
};
