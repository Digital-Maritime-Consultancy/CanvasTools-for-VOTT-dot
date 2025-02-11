import { IToolbarIcon } from "../Interface/IToolbarIcon";
import { ToolbarAction } from "./ToolbarAction";
import { ToolbarIcon } from "./ToolbarIcon";
import { IconCallback } from "./ToolbarSelect";

export class ToolbarSelectIcon extends ToolbarIcon {

    private iconBackgrounRect: Snap.Element;
    private iconImage: Snap.Element;
    private iconImageSVG: Snap.Element;

    constructor(paper: Snap.Paper, icon: IToolbarIcon, onAction: IconCallback, action?: ToolbarAction, key?: string[]) {
        super(paper, icon, onAction, action, key);

        this.buildIconUI();
    }

    public activate() {
        this.onAction(this.description.action);
        this.select();
    }

    public move(x: number, y: number) {
        super.move(x, y);
        this.iconBackgrounRect.attr({ x, y });
        if (this.iconImageSVG !== undefined) {
            this.iconImageSVG.attr({ x, y });
        }
    }

    public resize(width: number, height: number) {
        super.resize(width, height);

        this.iconBackgrounRect.attr({
            height: this.height,
            width: this.width,
        });

        this.iconImageSVG.attr({
            height: this.height,
            width: this.width,
        });
    }

    private buildIconUI() {
        this.node = this.paper.g();
        this.node.addClass("iconStyle");
        this.node.addClass("selector");
        this.node.attr({tabindex: 0, role: "button"});

        this.iconBackgrounRect = this.paper.rect(0, 0, this.width, this.height);
        this.iconBackgrounRect.addClass("iconBGRectStyle");

        this.iconImage = this.paper.g();
        if (this.description.iconUrl !== undefined) {
            Snap.load(this.description.iconUrl, (fragment) => {
                this.iconImage.append(fragment as any);
                this.iconImageSVG = this.iconImage.children().find((element) => {
                    return (element.type === "svg");
                });
                if (this.iconImageSVG !== undefined) {
                    this.iconImageSVG.attr({
                        height: this.height,
                        width: this.width,
                    });

                    this.move(this.x, this.y);
                }
            });
        }
        this.iconImage.addClass("iconImageStyle");

        const title = Snap.parse(`<title>${this.description.tooltip}</title>`);

        this.node.add(this.iconBackgrounRect);
        this.node.add(this.iconImage);
        this.node.append(title as any);

        this.node.click((e) => {
            this.activate();
        });

        this.node.node.addEventListener("focus", this.onfocusCallback);
        this.node.node.addEventListener("focusout", this.onfocusoutCallback);
    }
}
