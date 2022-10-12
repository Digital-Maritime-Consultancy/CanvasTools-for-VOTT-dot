import { CursorPosition, ZoomData } from "../Core/ZoomManager";

export type ZoomFunction = (cursorPos?: CursorPosition) => void;
export type ZoomUpdateFunction = (zoomData: ZoomData) => void;
/**
 * Defines a collection of callbacks passed to the `ZoomManager` constructor.
 */
export interface IZoomCallbacks {
    /**
     * The callback to be called on zooming out.
     */
    onZoomingOut: ZoomFunction;

    /**
     * The callback to be called on zooming in.
     */
    onZoomingIn: ZoomFunction;

    /**
     * Get the current zoom level
     */
    getZoomLevel: () => number;

    /**
     * Set the current zoom level
     */
    setZoomLevel: (zoomScale: number) => ZoomData;
    
    /**
     * Set the canvas draggable when it is zooming in
     */
    onDragActivated: () => void;

    /**
     * Remove event listener for dragging
     */
    onDragDeactivated: () => void;

    /**
     * Apply screen position
     */
    onApplyScreenPos: (scrollLeft: number, scrollTop: number) => void;
}
