import React from 'react'
import { Search, TextInput, TouchableOpacity, ViewInput } from './Input.styles'

export function Input() {
    return (
      <>
        <ViewInput>
          <TextInput 
            placeholder="Buscar cidade..."
            placeholderTextColor="#B2B2B2"
          />
          <TouchableOpacity
          >
            <Search />
          </TouchableOpacity>
        </ViewInput>
      </>
    )
}