#include <stdio.h>

int main(){
	
	FILE *ALUNOS;
	char nome[50];
	int i ;
	

	
	ALUNOS = fopen("alunos.txt", "w");
	
	for(i=0; i<3; i++){
		printf("diga nome; ");
		scanf("%s", &nome);
		
		
		fprintf(ALUNOS, "%s\n", nome);
	}
	
	
	
	
	
	
	
	fclose(ALUNOS);
	
	printf("SUCESSO");
	
	
	return 0;
}