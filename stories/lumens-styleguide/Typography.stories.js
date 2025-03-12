import React from 'react';


export default {
  title: 'Styleguide/Typography/Text',
  tags: ['autodocs'],
  args: {
      headingText: 'Heading',
      paragraphText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
      smallText: 'Small text',
      boldText: 'Bold text',
      italicText: 'Italic text',
      underlinedText: 'Underlined text',
      strikethroughText: 'Strikethrough text',
      codeText: 'Code text',
      linkText: 'Link text',
      blockquoteText: 'Blockquote text',
      preText: 'Pre text',
  },
}

export const Headers = ({
  headingText = 'Heading',
}) => (<div>
    <h1>{headingText} 1</h1>
    <h2>{headingText} 2</h2>
    <h3>{headingText} 3</h3>
    <h4>{headingText} 4</h4>
    <h5>{headingText} 5</h5>
    <h6>{headingText} 6</h6>
</div>)

export const TextElements = ({
  paragraphText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
  smallText = 'Small text',
  boldText = 'Bold text',
  italicText = 'Italic text',
  underlinedText = 'Underlined text',
  strikethroughText = 'Strikethrough text',
  codeText = 'Code text',
  linkText = 'Link text',
  blockquoteText = 'Blockquote text',
  preText = 'Pre text',
}) => (<div>
    <p>{paragraphText}</p> 
    <p><small>{smallText}</small></p>
    <p><strong>{boldText}</strong></p>
    <p><em>{italicText}</em></p>
    <p><u>{underlinedText}</u></p>
    <p><s>{strikethroughText}</s></p>
    <p><code>{codeText}</code></p>
    <p><a href="#">{linkText}</a></p>
    <blockquote>{blockquoteText}</blockquote>
    <pre>{preText}</pre>
</div>)

export const TextSizes = () => (
    <div>
        <h3>Text Sizes</h3>
        <p className="text-xs">Extra Small Text</p>
        <p className="text-sm">Small Text</p>
        <p className="text-md">Medium Text</p>
        <p className="text-lg">Large Text</p>
        <p className="text-xl">Extra Large Text</p>
        <p className="text-2xl">2X Large Text</p>
        <p className="text-3xl">3X Large Text</p>
        <p className="text-4xl">4X Large Text</p>
    </div>
)
