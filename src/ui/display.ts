/*
 * @Author: chenzhongsheng
 * @Date: 2024-12-29 09:19:37
 * @Description: Coding something
 */
import type {Dom} from 'link-dom';
import {dom} from 'link-dom';
import {addStyle} from './style/style';
import type {IContent} from '../types';
import {transformContent} from '../utils';

export const DisplayGap = 2;

addStyle({
    '.term-display-box > div': {
        'padding': `${DisplayGap}px 0`,
        wordBreak: 'break-all',
        whiteSpace: 'pre-wrap',
        a: {
            color: '#ccc',
        }
    }
});

export class TermDisplay {
    container: Dom;
    constructor () {
        this.container = dom.div.class('term-display-box').on('click', e => {
            e.stopPropagation();
        });
    }

    pushContent (content: IContent, html: boolean) {
        this.container.append(
            transformContent(content, html, '\n')
        );
    }
}