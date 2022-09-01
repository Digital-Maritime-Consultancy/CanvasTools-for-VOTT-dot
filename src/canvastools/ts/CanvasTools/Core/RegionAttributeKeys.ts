import { Tag } from "./Tag";

/**
 * Represents a composition of attribute keys
 */
export class RegionAttributeKeys {
    /**
     * Creates a new `TagDescriptor` object based on extracting specific properties from any provided object
     * @remarks The `TagDescriptor` object is *immutable*. All public properties return copies of objects.
     * @param data - An `ITagDescriptor` object with the `primary` and `secondary`
     * properties implementing `ITag` and `ITag[]` interfaces
     * @returns A new `TagDescriptor` object
     */
    /*
    public static BuildFromJSON(data: IRegionAttributeKeys): RegionAttributeKeys {
        let p = null;
        if (data.primary !== null && data.primary !== undefined) {
            p = Tag.BuildFromJSON(data.primary);
        }
        const s = (data.secondary === undefined) ? [] : data.secondary.map((tag) => Tag.BuildFromJSON(tag));

        return new RegionAttributeKeys(p, s);
    }
    */

    private allRegionAttributeKeys: string[];

    /**
     * Returns an array of all tags (no order guaranteed). *Readonly*
     */
    public get all() {
        return this.allRegionAttributeKeys;
    }

    /**
     * Creates a new  empty`TagDescriptor` object
     */
    constructor();
    /**
     * Creates a new `TagDescriptor` object with specified tags
     * @param tags - A tags array with the `tags[0]` used as `primaryTag`
     */
    constructor(attributeKeys: string[]);
    /**
     * Creates a new `TagDescriptor` object with specified tags
     * @param primaryTag - Primary `Tag` for the descriptor
     */
    constructor(arg1?: string|string[]) {
        // empty RegionAttributeKeys
        if (arg1 === undefined) {
            this.allRegionAttributeKeys = [];
        } else if (typeof arg1 === 'string') {
            this.allRegionAttributeKeys = [arg1];
        } else if (arg1 instanceof Array) {
            // arg1 = tags, ignore arg2
            this.allRegionAttributeKeys = arg1;
        } else if (arg1 === null) {
            this.allRegionAttributeKeys = [];
        }
    }

    /**
     * Returns a string with a comma separated list of tags with primary tag first (if present)
     */
    public toString(): string {
        return this.allRegionAttributeKeys.toString();
    }

}
