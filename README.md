# React Pluralize
This tiny React component makes it really easy to pluralize words. It doesn't rely on a library of singular/plural forms because you provide the correct translation from within the component.

## Install
    npm i -S react-pluralize

## Import
    import Pluralize from 'react-pluralize'

## Use
    <Pluralize singular="view" count={3} /> => 3 views
    <Pluralize singular="sheep" plural="sheep" count={3} /> => 3 sheep
    <Pluralize singular="like" /> => 1 like
    <Pluralize singular="like" showCount={false}/> => like

    // Dyanmic Updating
    // If count prop is provided with a value that changes during runtime then the output changes accordingly

    // this.state.count = 1
    <Pluralize singular="hit" count={this.state.count} /> => 1 hit

    // this.state.count = 2
    <Pluralize singular="hit" count={this.state.count} /> => 2 hits

## Props

**singular** (required)(String)
Provide the singular form of the noun

**plural** (optional)(String)
In the English language most nouns are pluralized by adding an "s" to the end but if this isn't the case then you need to provide the irregular plural form as a prop value. For example, if the noun (singular) is "person" then provide "people" as the value.

**count** (optional but recommended)(default: 1)(Number)
If you don't provide a count prop value then a default value of 1 is used.
To take advantage of dynamic updating, you should include this prop.

**showCount** (optional)(default: true)(Boolean)
If you would prefer not to see the count in the output then set this prop to false.

The following props can be provided to style the appearance of the output.

**className** (optional)(String)

**style** (optional)(String)
