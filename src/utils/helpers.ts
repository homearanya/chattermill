import { kebabCase } from "lodash"

export const addDays = (date: Date, days: number): Date => {
  const copy = new Date(Number(date))
  copy.setDate(date.getDate() + days)
  return copy
}

export const textTruncate = (text: string, num: number): string => {
  if (num >= text.length) return text
  let result = ""
  const words = text.split(" ")

  let i = 0
  while (i < words.length) {
    if (result.length + words[i].length + 1 > num) {
      break
    } else {
      result += ` ${words[i]}`
    }
    i++
  }
  if (result[result.length - 1] === ".") {
    result += ".."
  } else {
    result += "..."
  }
  return result
}

export const jobSlug = (title: string, id: number): [string, string] => {
  const jobSlug = kebabCase(`${title} ${id}`)
  const tagPath = `/careers/${jobSlug}/`
  return [tagPath, jobSlug]
}

export const greenHouseDepartmentsList = (departments: { name: string }[]) => {
  return departments.reduce((output, department, i) => {
    if (i === 0) {
      return department.name
    }
    return `${output}, ${department.name}`
  }, "")
}

export const getCookie = (name: string): string => {
  var re = new RegExp(name + "=([^;]+)")
  if (typeof window !== undefined) {
    var value = re.exec(document.cookie)
  }
  return value != null ? unescape(value[1]) : null
}

export const contentfulImageMap = (image: SubContentfulAsset): SubFile => {
  const imageFluid: SubImageSharpFluid = image.fluid
    ? { ...image.fluid }
    : undefined

  const imageFixed: SubImageSharpFixed = image.fixed
    ? { ...image.fixed }
    : undefined

  const childImageSharp: SubImageSharp = {
    fixed: imageFixed,
    fluid: imageFluid,
  }
  const publicURL = image.file && image.file.url ? image.file.url : undefined
  return {
    childImageSharp: childImageSharp,
    publicURL,
  }
}

export const getPresentationWidthFromSizes = (sizes: string): number => {
  const step1 = sizes.split("px")
  if (step1.length < 2) return null
  const step2 = step1[step1.length - 2].split(" ")
  if (step2.length < 1) return null
  if (+step2[step2.length - 1] > 0) {
    return +step2[step2.length - 1]
  } else {
    return null
  }
}

export const activePath = (path: string, rootPath: string): string => {
  let activeClass = ""
  if (path && path.indexOf(rootPath) === 0) {
    activeClass = "active"
  }

  return activeClass
}
