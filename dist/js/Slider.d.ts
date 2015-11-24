/// <reference path="../../typings/jquery/jquery.d.ts" />
/// <reference path="../../typings/underscore/underscore.d.ts" />
/// <reference path="../../src/Slider.d.ts" />
declare var SliderMethods: {
    Destroy: string;
    Update: string;
};
declare class Slider {
    private colors;
    private options;
    private $el;
    private _uid;
    static LowerDefaultColor: string;
    static UpperDefaultColor: string;
    static StyleElementClass: string;
    static InputElementClass: string;
    static DefaultValue: number;
    static _uid: number;
    constructor(options: SliderOptions);
    defaults(): {
        colors: {
            lower: string;
            upper: string;
        };
        min: number;
        max: number;
        labels: any[];
        value: number;
    };
    update(): void;
    private updateSliderColors(value);
    value: number;
    min: number;
    max: number;
    destroy(elem: JQuery): void;
}
