# React Pluralize
This tiny React component makes it really easy to pluralize (and singularize) words. It doesn't rely on a library of singular/plural forms because you provide the correct translation from within the component.

## Install
    npm i -S react-pluralize

## Import
    import Pluralize from 'react-pluralize'

## Use
    <Pluralize singular="view" count={3} /> => 3 views
    <Pluralize singular="sheep" plural="sheep" count={3} /> => 3 sheep
    <Pluralize singular="like" /> => 1 like

## Props
`react-pluralize` accepts three props; **singular** is required and an error will be thrown if not provided, **plural** is optional and should be used when it's an irregular plural form. For example, the plural form of the word "person" is "people" so the **plural** prop should be provided. The third prop is **count** and is also optional. If not provided, it defaults to 1.
