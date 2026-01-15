import { z } from "zod";
import { createCatalog, ActionSchema } from "@json-render/core";

export const shadcnCatalog = createCatalog({
  name: "shadcn-ui",
  components: {
    Card: {
      props: z.object({
        title: z.string().optional(),
        description: z.string().optional(),
      }),
      hasChildren: true,
      description: "A card container with optional header",
    },

    Stack: {
      props: z.object({
        direction: z.enum(["horizontal", "vertical"]).default("vertical"),
        gap: z.enum(["none", "sm", "md", "lg"]).default("md"),
        align: z.enum(["start", "center", "end", "stretch"]).default("stretch"),
        justify: z
          .enum(["start", "center", "end", "between", "around"])
          .default("start"),
      }),
      hasChildren: true,
      description: "Flex container for layout",
    },

    Grid: {
      props: z.object({
        columns: z.number().min(1).max(12).default(2),
        gap: z.enum(["none", "sm", "md", "lg"]).default("md"),
      }),
      hasChildren: true,
      description: "Grid layout container",
    },

    Separator: {
      props: z.object({
        orientation: z.enum(["horizontal", "vertical"]).default("horizontal"),
      }),
      hasChildren: false,
      description: "Visual separator line",
    },

    Heading: {
      props: z.object({
        text: z.string(),
        level: z.enum(["h1", "h2", "h3", "h4"]).default("h2"),
      }),
      hasChildren: false,
      description: "Heading text with configurable level",
    },

    Text: {
      props: z.object({
        content: z.string(),
        variant: z.enum(["default", "muted", "small"]).default("default"),
      }),
      hasChildren: false,
      description: "Text paragraph",
    },

    Badge: {
      props: z.object({
        text: z.string(),
        variant: z
          .enum(["default", "secondary", "destructive", "outline"])
          .default("default"),
      }),
      hasChildren: false,
      description: "Status badge or tag",
    },

    Alert: {
      props: z.object({
        title: z.string(),
        message: z.string().optional(),
        variant: z.enum(["default", "destructive"]).default("default"),
      }),
      hasChildren: false,
      description: "Alert message box",
    },

    Progress: {
      props: z.object({
        valuePath: z.string(),
        max: z.number().default(100),
      }),
      hasChildren: false,
      description: "Progress bar with data binding",
    },

    Metric: {
      props: z.object({
        label: z.string(),
        valuePath: z.string(),
        format: z.enum(["number", "currency", "percent"]).default("number"),
        trend: z.enum(["up", "down", "neutral"]).optional(),
        trendValue: z.string().optional(),
      }),
      hasChildren: false,
      description: "Single metric display with optional trend indicator",
    },

    Skeleton: {
      props: z.object({
        width: z.string().default("100%"),
        height: z.string().default("1rem"),
      }),
      hasChildren: false,
      description: "Loading placeholder",
    },

    Button: {
      props: z.object({
        label: z.string(),
        action: ActionSchema,
        variant: z
          .enum(["default", "destructive", "outline", "secondary", "ghost"])
          .default("default"),
        size: z.enum(["default", "sm", "lg", "icon"]).default("default"),
        disabled: z.boolean().default(false),
      }),
      hasChildren: false,
      description: "Clickable button with action",
    },

    TextField: {
      props: z.object({
        label: z.string(),
        valuePath: z.string(),
        placeholder: z.string().optional(),
        type: z.enum(["text", "email", "password", "number"]).default("text"),
        disabled: z.boolean().default(false),
      }),
      hasChildren: false,
      description: "Text input field with label",
    },

    Checkbox: {
      props: z.object({
        label: z.string(),
        valuePath: z.string(),
        disabled: z.boolean().default(false),
      }),
      hasChildren: false,
      description: "Checkbox with label",
    },

    Tabs: {
      props: z.object({
        defaultValue: z.string(),
        tabs: z.array(
          z.object({
            value: z.string(),
            label: z.string(),
          }),
        ),
      }),
      hasChildren: true,
      description:
        "Tab container - children should be TabContent with matching values",
    },

    TabContent: {
      props: z.object({
        value: z.string(),
      }),
      hasChildren: true,
      description: "Content for a specific tab",
    },

    DataTable: {
      props: z.object({
        dataPath: z.string(),
        columns: z.array(
          z.object({
            key: z.string(),
            label: z.string(),
            format: z
              .enum(["text", "number", "currency", "date", "badge"])
              .optional(),
          }),
        ),
      }),
      hasChildren: false,
      description: "Data table with configurable columns bound to data path",
    },
  },

  actions: {
    submit: {
      description: "Submit form data",
      params: z.object({
        formPath: z.string().optional(),
      }),
    },
    navigate: {
      description: "Navigate to a path",
      params: z.object({
        to: z.string(),
      }),
    },
    refresh: {
      description: "Refresh data",
      params: z.object({
        dataPath: z.string().optional(),
      }),
    },
    set: {
      description: "Set a value in the data model",
      params: z.object({
        path: z.string(),
        value: z.unknown(),
      }),
    },
    toggle: {
      description: "Toggle a boolean value",
      params: z.object({
        path: z.string(),
      }),
    },
  },
});

export const componentList = shadcnCatalog.componentNames;

export type ShadcnCatalogProps = typeof shadcnCatalog;
