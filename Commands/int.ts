export interface command {
    title: String;
    description: String;
    category: "config" | "moderation-general" | "moderation-admin" | "general" | 'islamic';
    command: any
}