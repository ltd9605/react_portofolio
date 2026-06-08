## Table `projects`

### Columns

| Name | Type | Constraints |
|------|------|-------------|
| `id` | `int8` | Primary Identity |
| `created_at` | `timestamptz` |  |
| `features` | `_text` |  Nullable |
| `technologies` | `_text` |  Nullable |
| `project_name` | `text` |  Nullable |
| `project_img` | `text` |  Nullable |
| `links` | `json` |  Nullable |
| `description` | `text` |  Nullable |
json links:
{
  "demo": "",
  "visit": "",
  "github": "https://github.com/ltd9605/ams_desktop_application"
}

## Table `certificates`

### Columns

| Name | Type | Constraints |
|------|------|-------------|
| `id` | `int8` | Primary Identity |
| `created_at` | `timestamptz` |  |
| `updated_at` | `timestamp` |  Nullable |
| `certificate_name` | `text` |  Nullable |
| `issuer` | `text` |  Nullable |
| `issue_date` | `timestamp` |  Nullable |
| `description` | `text` |  Nullable |
| `certificate_img` | `text` |  Nullable |
| `links` | `json` |  Nullable |
 json links:
{
  "verify": "https://www.coursera.org/account/accomplishments/verify/RYG212F1NOKZ"
}

## Table `Message`

### Columns

| Name | Type | Constraints |
|------|------|-------------|
| `id` | `int8` | Primary Identity |
| `created_at` | `timestamptz` |  |
| `name` | `text` |  Nullable |
| `email` | `text` |  Nullable |
| `subject` | `text` |  Nullable |
| `message` | `text` |  Nullable |

