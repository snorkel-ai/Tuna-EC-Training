#!/usr/bin/env python3
"""
Helper script to extract text content from the PDF file.
This script requires PyPDF2 or pdfplumber to be installed.

Install dependencies:
    pip install PyPDF2
    # OR
    pip install pdfplumber
"""

import sys
import os

def extract_with_pypdf2(pdf_path):
    """Extract text using PyPDF2"""
    try:
        import PyPDF2
        text_content = []
        
        with open(pdf_path, 'rb') as file:
            pdf_reader = PyPDF2.PdfReader(file)
            num_pages = len(pdf_reader.pages)
            
            print(f"Found {num_pages} pages in PDF")
            
            for page_num, page in enumerate(pdf_reader.pages, 1):
                text = page.extract_text()
                if text.strip():
                    text_content.append(f"\n--- Page {page_num} ---\n")
                    text_content.append(text)
            
        return '\n'.join(text_content)
    except ImportError:
        print("PyPDF2 not installed. Install with: pip install PyPDF2")
        return None

def extract_with_pdfplumber(pdf_path):
    """Extract text using pdfplumber"""
    try:
        import pdfplumber
        text_content = []
        
        with pdfplumber.open(pdf_path) as pdf:
            num_pages = len(pdf.pages)
            print(f"Found {num_pages} pages in PDF")
            
            for page_num, page in enumerate(pdf.pages, 1):
                text = page.extract_text()
                if text:
                    text_content.append(f"\n--- Page {page_num} ---\n")
                    text_content.append(text)
            
        return '\n'.join(text_content)
    except ImportError:
        print("pdfplumber not installed. Install with: pip install pdfplumber")
        return None

def main():
    pdf_path = "Project Tuna Guidelines.pdf"
    
    if not os.path.exists(pdf_path):
        print(f"Error: PDF file '{pdf_path}' not found in current directory")
        sys.exit(1)
    
    print(f"Extracting text from: {pdf_path}")
    print("-" * 50)
    
    # Try pdfplumber first (better quality), then PyPDF2
    text = extract_with_pdfplumber(pdf_path)
    
    if text is None:
        text = extract_with_pypdf2(pdf_path)
    
    if text:
        output_file = "extracted-content.txt"
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(text)
        print(f"\n✓ Successfully extracted text to: {output_file}")
        print(f"  Total characters: {len(text)}")
        print(f"\nYou can now review {output_file} and integrate the content")
        print("into the React app components in src/components/sections/")
    else:
        print("\n✗ Could not extract text. Please install a PDF library:")
        print("  pip install pdfplumber")
        print("  OR")
        print("  pip install PyPDF2")

if __name__ == "__main__":
    main()
