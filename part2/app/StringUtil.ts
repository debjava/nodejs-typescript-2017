export class StringUtil {
    public static equals(srcString: string, destnString: string): boolean {
        return srcString.toLowerCase() == destnString.toLowerCase();
    }
}