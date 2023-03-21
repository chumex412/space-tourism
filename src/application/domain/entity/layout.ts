import React, { ComponentType } from 'react';

export type LayoutProps = {
	children: React.ReactElement;
};

export type LayoutState = {};

export interface RoutesType {
	id: number;
	path: string;
	name: string;
}

interface FuncLinkProps {
	index: number;
}

export type PageLinkProps = RoutesType & FuncLinkProps;

export type NavlinksStateType = {
	show: boolean;
};

// Background

export interface BackgroundProps {
	desktop: string;
	tablet: string;
	mobile: string;
}

// Header

export interface PageHeader {
	intro?: string;
	lead: string;
	text: string;
}
