# React Pluralize
A tiny React component that pluralizes English nouns such as **like(s)**, **view(s)** and **hit(s)**.

## Install
    npm install react-pluralize --save

## Import
    import Pluralize from 'react-pluralize'

## Use
    <Pluralize singular="view" count={3} /> => 3 views
    <Pluralize singular="person" plural="people" count={3} /> => 3 people
    <Pluralize singular="like" showCount={false}/> => like

## Props

**singular** (required)(String)
The singular form of the noun

**plural** (optional)(default: singular + 's')(String)
The plural form of the noun if required (i.e. when the plural form isn't just 's' added to the end)

**count** (optional)(default: 1)(Number)
The count value used to determine whether the singular or plural form should be used.

**showCount** (optional)(default: true)(Boolean)
If you would prefer not to see the count in the output then set this prop to false.

**className** (optional)(String)

**style** (optional)(Object)
