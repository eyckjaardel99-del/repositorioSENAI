#include <stdio.h>

int main(){
	
	FILE *arquivo;
	
	arquivo = fopen("dados.txt", "w");
	
	fprintf(arquivo, "ola mundo!");
	
	fclose(arquivo);
	
	
	
	
	
	
	
	return 0;
}