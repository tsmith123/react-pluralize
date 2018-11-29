export const pluralize = ({ singular, plural, count, showCount, zero }) => {
  if (count === 0 && zero) return zero

  let output = singular
  if (count !== 1) {
    output = plural || `${singular}s`
  }

  return showCount ? `${count} ${output}` : output
}
