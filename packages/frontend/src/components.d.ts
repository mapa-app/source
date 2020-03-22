/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MapaColorPicker {
        "colors": string[];
        "selected"?: string;
    }
    interface MapaDiary {
    }
    interface MapaDiaryEntry {
        "avatars": string[];
        "date": Date;
        "headline": string;
        "image"?: string;
        "location"?: string;
    }
    interface MapaFamilyState {
        "active": boolean;
        "status": "TOGETHER" | "DIVORCED" | "PATCHED" | "SINGLE";
    }
    interface MapaGenderSelect {
        "selected"?: "FEMALE" | "MALE";
    }
    interface MapaHeader {
        "headline"?: string;
    }
    interface MapaIcon {
    }
    interface MapaIconFamily {
        "status": "TOGETHER" | "DIVORCED" | "PATCHED" | "SINGLE";
    }
    interface MapaIconGender {
        "gender": "FEMALE" | "MALE";
    }
    interface MapaIconHome {
    }
    interface MapaIconIdea {
    }
    interface MapaIconKite {
    }
    interface MapaIconLogo {
    }
    interface MapaMain {
    }
    interface MapaPageCalendar {
    }
    interface MapaPageDashboard {
    }
    interface MapaPageDiary {
    }
    interface MapaPageDocuments {
    }
    interface MapaPageExplore {
    }
    interface MapaPageFamilyStatus {
    }
    interface MapaPageKidsCreate {
    }
    interface MapaPageLogin {
    }
    interface MapaPageMediation {
    }
    interface MapaPageProfile {
        "name": string;
    }
    interface MapaPageProfileCreate {
    }
    interface MapaPageWelcome {
    }
    interface MapaRoot {
    }
    interface MapaRouter {
    }
    interface MapaWrapper {
    }
}
declare global {
    interface HTMLMapaColorPickerElement extends Components.MapaColorPicker, HTMLStencilElement {
    }
    var HTMLMapaColorPickerElement: {
        prototype: HTMLMapaColorPickerElement;
        new (): HTMLMapaColorPickerElement;
    };
    interface HTMLMapaDiaryElement extends Components.MapaDiary, HTMLStencilElement {
    }
    var HTMLMapaDiaryElement: {
        prototype: HTMLMapaDiaryElement;
        new (): HTMLMapaDiaryElement;
    };
    interface HTMLMapaDiaryEntryElement extends Components.MapaDiaryEntry, HTMLStencilElement {
    }
    var HTMLMapaDiaryEntryElement: {
        prototype: HTMLMapaDiaryEntryElement;
        new (): HTMLMapaDiaryEntryElement;
    };
    interface HTMLMapaFamilyStateElement extends Components.MapaFamilyState, HTMLStencilElement {
    }
    var HTMLMapaFamilyStateElement: {
        prototype: HTMLMapaFamilyStateElement;
        new (): HTMLMapaFamilyStateElement;
    };
    interface HTMLMapaGenderSelectElement extends Components.MapaGenderSelect, HTMLStencilElement {
    }
    var HTMLMapaGenderSelectElement: {
        prototype: HTMLMapaGenderSelectElement;
        new (): HTMLMapaGenderSelectElement;
    };
    interface HTMLMapaHeaderElement extends Components.MapaHeader, HTMLStencilElement {
    }
    var HTMLMapaHeaderElement: {
        prototype: HTMLMapaHeaderElement;
        new (): HTMLMapaHeaderElement;
    };
    interface HTMLMapaIconElement extends Components.MapaIcon, HTMLStencilElement {
    }
    var HTMLMapaIconElement: {
        prototype: HTMLMapaIconElement;
        new (): HTMLMapaIconElement;
    };
    interface HTMLMapaIconFamilyElement extends Components.MapaIconFamily, HTMLStencilElement {
    }
    var HTMLMapaIconFamilyElement: {
        prototype: HTMLMapaIconFamilyElement;
        new (): HTMLMapaIconFamilyElement;
    };
    interface HTMLMapaIconGenderElement extends Components.MapaIconGender, HTMLStencilElement {
    }
    var HTMLMapaIconGenderElement: {
        prototype: HTMLMapaIconGenderElement;
        new (): HTMLMapaIconGenderElement;
    };
    interface HTMLMapaIconHomeElement extends Components.MapaIconHome, HTMLStencilElement {
    }
    var HTMLMapaIconHomeElement: {
        prototype: HTMLMapaIconHomeElement;
        new (): HTMLMapaIconHomeElement;
    };
    interface HTMLMapaIconIdeaElement extends Components.MapaIconIdea, HTMLStencilElement {
    }
    var HTMLMapaIconIdeaElement: {
        prototype: HTMLMapaIconIdeaElement;
        new (): HTMLMapaIconIdeaElement;
    };
    interface HTMLMapaIconKiteElement extends Components.MapaIconKite, HTMLStencilElement {
    }
    var HTMLMapaIconKiteElement: {
        prototype: HTMLMapaIconKiteElement;
        new (): HTMLMapaIconKiteElement;
    };
    interface HTMLMapaIconLogoElement extends Components.MapaIconLogo, HTMLStencilElement {
    }
    var HTMLMapaIconLogoElement: {
        prototype: HTMLMapaIconLogoElement;
        new (): HTMLMapaIconLogoElement;
    };
    interface HTMLMapaMainElement extends Components.MapaMain, HTMLStencilElement {
    }
    var HTMLMapaMainElement: {
        prototype: HTMLMapaMainElement;
        new (): HTMLMapaMainElement;
    };
    interface HTMLMapaPageCalendarElement extends Components.MapaPageCalendar, HTMLStencilElement {
    }
    var HTMLMapaPageCalendarElement: {
        prototype: HTMLMapaPageCalendarElement;
        new (): HTMLMapaPageCalendarElement;
    };
    interface HTMLMapaPageDashboardElement extends Components.MapaPageDashboard, HTMLStencilElement {
    }
    var HTMLMapaPageDashboardElement: {
        prototype: HTMLMapaPageDashboardElement;
        new (): HTMLMapaPageDashboardElement;
    };
    interface HTMLMapaPageDiaryElement extends Components.MapaPageDiary, HTMLStencilElement {
    }
    var HTMLMapaPageDiaryElement: {
        prototype: HTMLMapaPageDiaryElement;
        new (): HTMLMapaPageDiaryElement;
    };
    interface HTMLMapaPageDocumentsElement extends Components.MapaPageDocuments, HTMLStencilElement {
    }
    var HTMLMapaPageDocumentsElement: {
        prototype: HTMLMapaPageDocumentsElement;
        new (): HTMLMapaPageDocumentsElement;
    };
    interface HTMLMapaPageExploreElement extends Components.MapaPageExplore, HTMLStencilElement {
    }
    var HTMLMapaPageExploreElement: {
        prototype: HTMLMapaPageExploreElement;
        new (): HTMLMapaPageExploreElement;
    };
    interface HTMLMapaPageFamilyStatusElement extends Components.MapaPageFamilyStatus, HTMLStencilElement {
    }
    var HTMLMapaPageFamilyStatusElement: {
        prototype: HTMLMapaPageFamilyStatusElement;
        new (): HTMLMapaPageFamilyStatusElement;
    };
    interface HTMLMapaPageKidsCreateElement extends Components.MapaPageKidsCreate, HTMLStencilElement {
    }
    var HTMLMapaPageKidsCreateElement: {
        prototype: HTMLMapaPageKidsCreateElement;
        new (): HTMLMapaPageKidsCreateElement;
    };
    interface HTMLMapaPageLoginElement extends Components.MapaPageLogin, HTMLStencilElement {
    }
    var HTMLMapaPageLoginElement: {
        prototype: HTMLMapaPageLoginElement;
        new (): HTMLMapaPageLoginElement;
    };
    interface HTMLMapaPageMediationElement extends Components.MapaPageMediation, HTMLStencilElement {
    }
    var HTMLMapaPageMediationElement: {
        prototype: HTMLMapaPageMediationElement;
        new (): HTMLMapaPageMediationElement;
    };
    interface HTMLMapaPageProfileElement extends Components.MapaPageProfile, HTMLStencilElement {
    }
    var HTMLMapaPageProfileElement: {
        prototype: HTMLMapaPageProfileElement;
        new (): HTMLMapaPageProfileElement;
    };
    interface HTMLMapaPageProfileCreateElement extends Components.MapaPageProfileCreate, HTMLStencilElement {
    }
    var HTMLMapaPageProfileCreateElement: {
        prototype: HTMLMapaPageProfileCreateElement;
        new (): HTMLMapaPageProfileCreateElement;
    };
    interface HTMLMapaPageWelcomeElement extends Components.MapaPageWelcome, HTMLStencilElement {
    }
    var HTMLMapaPageWelcomeElement: {
        prototype: HTMLMapaPageWelcomeElement;
        new (): HTMLMapaPageWelcomeElement;
    };
    interface HTMLMapaRootElement extends Components.MapaRoot, HTMLStencilElement {
    }
    var HTMLMapaRootElement: {
        prototype: HTMLMapaRootElement;
        new (): HTMLMapaRootElement;
    };
    interface HTMLMapaRouterElement extends Components.MapaRouter, HTMLStencilElement {
    }
    var HTMLMapaRouterElement: {
        prototype: HTMLMapaRouterElement;
        new (): HTMLMapaRouterElement;
    };
    interface HTMLMapaWrapperElement extends Components.MapaWrapper, HTMLStencilElement {
    }
    var HTMLMapaWrapperElement: {
        prototype: HTMLMapaWrapperElement;
        new (): HTMLMapaWrapperElement;
    };
    interface HTMLElementTagNameMap {
        "mapa-color-picker": HTMLMapaColorPickerElement;
        "mapa-diary": HTMLMapaDiaryElement;
        "mapa-diary-entry": HTMLMapaDiaryEntryElement;
        "mapa-family-state": HTMLMapaFamilyStateElement;
        "mapa-gender-select": HTMLMapaGenderSelectElement;
        "mapa-header": HTMLMapaHeaderElement;
        "mapa-icon": HTMLMapaIconElement;
        "mapa-icon-family": HTMLMapaIconFamilyElement;
        "mapa-icon-gender": HTMLMapaIconGenderElement;
        "mapa-icon-home": HTMLMapaIconHomeElement;
        "mapa-icon-idea": HTMLMapaIconIdeaElement;
        "mapa-icon-kite": HTMLMapaIconKiteElement;
        "mapa-icon-logo": HTMLMapaIconLogoElement;
        "mapa-main": HTMLMapaMainElement;
        "mapa-page-calendar": HTMLMapaPageCalendarElement;
        "mapa-page-dashboard": HTMLMapaPageDashboardElement;
        "mapa-page-diary": HTMLMapaPageDiaryElement;
        "mapa-page-documents": HTMLMapaPageDocumentsElement;
        "mapa-page-explore": HTMLMapaPageExploreElement;
        "mapa-page-family-status": HTMLMapaPageFamilyStatusElement;
        "mapa-page-kids-create": HTMLMapaPageKidsCreateElement;
        "mapa-page-login": HTMLMapaPageLoginElement;
        "mapa-page-mediation": HTMLMapaPageMediationElement;
        "mapa-page-profile": HTMLMapaPageProfileElement;
        "mapa-page-profile-create": HTMLMapaPageProfileCreateElement;
        "mapa-page-welcome": HTMLMapaPageWelcomeElement;
        "mapa-root": HTMLMapaRootElement;
        "mapa-router": HTMLMapaRouterElement;
        "mapa-wrapper": HTMLMapaWrapperElement;
    }
}
declare namespace LocalJSX {
    interface MapaColorPicker {
        "colors"?: string[];
        "onColored"?: (event: CustomEvent<string>) => void;
        "selected"?: string;
    }
    interface MapaDiary {
    }
    interface MapaDiaryEntry {
        "avatars"?: string[];
        "date"?: Date;
        "headline"?: string;
        "image"?: string;
        "location"?: string;
    }
    interface MapaFamilyState {
        "active"?: boolean;
        "status"?: "TOGETHER" | "DIVORCED" | "PATCHED" | "SINGLE";
    }
    interface MapaGenderSelect {
        "onGendered"?: (event: CustomEvent<"FEMALE" | "MALE">) => void;
        "selected"?: "FEMALE" | "MALE";
    }
    interface MapaHeader {
        "headline"?: string;
    }
    interface MapaIcon {
    }
    interface MapaIconFamily {
        "status"?: "TOGETHER" | "DIVORCED" | "PATCHED" | "SINGLE";
    }
    interface MapaIconGender {
        "gender"?: "FEMALE" | "MALE";
    }
    interface MapaIconHome {
    }
    interface MapaIconIdea {
    }
    interface MapaIconKite {
    }
    interface MapaIconLogo {
    }
    interface MapaMain {
    }
    interface MapaPageCalendar {
    }
    interface MapaPageDashboard {
    }
    interface MapaPageDiary {
    }
    interface MapaPageDocuments {
    }
    interface MapaPageExplore {
    }
    interface MapaPageFamilyStatus {
    }
    interface MapaPageKidsCreate {
    }
    interface MapaPageLogin {
    }
    interface MapaPageMediation {
    }
    interface MapaPageProfile {
        "name"?: string;
    }
    interface MapaPageProfileCreate {
    }
    interface MapaPageWelcome {
    }
    interface MapaRoot {
    }
    interface MapaRouter {
    }
    interface MapaWrapper {
    }
    interface IntrinsicElements {
        "mapa-color-picker": MapaColorPicker;
        "mapa-diary": MapaDiary;
        "mapa-diary-entry": MapaDiaryEntry;
        "mapa-family-state": MapaFamilyState;
        "mapa-gender-select": MapaGenderSelect;
        "mapa-header": MapaHeader;
        "mapa-icon": MapaIcon;
        "mapa-icon-family": MapaIconFamily;
        "mapa-icon-gender": MapaIconGender;
        "mapa-icon-home": MapaIconHome;
        "mapa-icon-idea": MapaIconIdea;
        "mapa-icon-kite": MapaIconKite;
        "mapa-icon-logo": MapaIconLogo;
        "mapa-main": MapaMain;
        "mapa-page-calendar": MapaPageCalendar;
        "mapa-page-dashboard": MapaPageDashboard;
        "mapa-page-diary": MapaPageDiary;
        "mapa-page-documents": MapaPageDocuments;
        "mapa-page-explore": MapaPageExplore;
        "mapa-page-family-status": MapaPageFamilyStatus;
        "mapa-page-kids-create": MapaPageKidsCreate;
        "mapa-page-login": MapaPageLogin;
        "mapa-page-mediation": MapaPageMediation;
        "mapa-page-profile": MapaPageProfile;
        "mapa-page-profile-create": MapaPageProfileCreate;
        "mapa-page-welcome": MapaPageWelcome;
        "mapa-root": MapaRoot;
        "mapa-router": MapaRouter;
        "mapa-wrapper": MapaWrapper;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "mapa-color-picker": LocalJSX.MapaColorPicker & JSXBase.HTMLAttributes<HTMLMapaColorPickerElement>;
            "mapa-diary": LocalJSX.MapaDiary & JSXBase.HTMLAttributes<HTMLMapaDiaryElement>;
            "mapa-diary-entry": LocalJSX.MapaDiaryEntry & JSXBase.HTMLAttributes<HTMLMapaDiaryEntryElement>;
            "mapa-family-state": LocalJSX.MapaFamilyState & JSXBase.HTMLAttributes<HTMLMapaFamilyStateElement>;
            "mapa-gender-select": LocalJSX.MapaGenderSelect & JSXBase.HTMLAttributes<HTMLMapaGenderSelectElement>;
            "mapa-header": LocalJSX.MapaHeader & JSXBase.HTMLAttributes<HTMLMapaHeaderElement>;
            "mapa-icon": LocalJSX.MapaIcon & JSXBase.HTMLAttributes<HTMLMapaIconElement>;
            "mapa-icon-family": LocalJSX.MapaIconFamily & JSXBase.HTMLAttributes<HTMLMapaIconFamilyElement>;
            "mapa-icon-gender": LocalJSX.MapaIconGender & JSXBase.HTMLAttributes<HTMLMapaIconGenderElement>;
            "mapa-icon-home": LocalJSX.MapaIconHome & JSXBase.HTMLAttributes<HTMLMapaIconHomeElement>;
            "mapa-icon-idea": LocalJSX.MapaIconIdea & JSXBase.HTMLAttributes<HTMLMapaIconIdeaElement>;
            "mapa-icon-kite": LocalJSX.MapaIconKite & JSXBase.HTMLAttributes<HTMLMapaIconKiteElement>;
            "mapa-icon-logo": LocalJSX.MapaIconLogo & JSXBase.HTMLAttributes<HTMLMapaIconLogoElement>;
            "mapa-main": LocalJSX.MapaMain & JSXBase.HTMLAttributes<HTMLMapaMainElement>;
            "mapa-page-calendar": LocalJSX.MapaPageCalendar & JSXBase.HTMLAttributes<HTMLMapaPageCalendarElement>;
            "mapa-page-dashboard": LocalJSX.MapaPageDashboard & JSXBase.HTMLAttributes<HTMLMapaPageDashboardElement>;
            "mapa-page-diary": LocalJSX.MapaPageDiary & JSXBase.HTMLAttributes<HTMLMapaPageDiaryElement>;
            "mapa-page-documents": LocalJSX.MapaPageDocuments & JSXBase.HTMLAttributes<HTMLMapaPageDocumentsElement>;
            "mapa-page-explore": LocalJSX.MapaPageExplore & JSXBase.HTMLAttributes<HTMLMapaPageExploreElement>;
            "mapa-page-family-status": LocalJSX.MapaPageFamilyStatus & JSXBase.HTMLAttributes<HTMLMapaPageFamilyStatusElement>;
            "mapa-page-kids-create": LocalJSX.MapaPageKidsCreate & JSXBase.HTMLAttributes<HTMLMapaPageKidsCreateElement>;
            "mapa-page-login": LocalJSX.MapaPageLogin & JSXBase.HTMLAttributes<HTMLMapaPageLoginElement>;
            "mapa-page-mediation": LocalJSX.MapaPageMediation & JSXBase.HTMLAttributes<HTMLMapaPageMediationElement>;
            "mapa-page-profile": LocalJSX.MapaPageProfile & JSXBase.HTMLAttributes<HTMLMapaPageProfileElement>;
            "mapa-page-profile-create": LocalJSX.MapaPageProfileCreate & JSXBase.HTMLAttributes<HTMLMapaPageProfileCreateElement>;
            "mapa-page-welcome": LocalJSX.MapaPageWelcome & JSXBase.HTMLAttributes<HTMLMapaPageWelcomeElement>;
            "mapa-root": LocalJSX.MapaRoot & JSXBase.HTMLAttributes<HTMLMapaRootElement>;
            "mapa-router": LocalJSX.MapaRouter & JSXBase.HTMLAttributes<HTMLMapaRouterElement>;
            "mapa-wrapper": LocalJSX.MapaWrapper & JSXBase.HTMLAttributes<HTMLMapaWrapperElement>;
        }
    }
}
