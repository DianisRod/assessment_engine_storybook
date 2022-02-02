import React from 'react';

import { Question } from './Question';

export default {
	title: 'Question',
	component: Question,
};


export const Imput = () => <Question id={1} />;

export const textarea = () => <Question id={2} />;


export const Radio = () => <Question id={3}>
</Question>